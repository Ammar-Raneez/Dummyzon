import { db } from "./firebase";

//we need access to these globally
export const initalState = {
    basket: [],  //add to basket and many more areas need access to this, in order to actually update our basket
    user: null
}

//*higher order function reduce, used mainly to "reduce" a bunch of values to single value
//*in this case we iterate thru the basket and add their price to a variable amount and return it
//*the amount starts from 0
export const getBasketTotal = basket => 
    basket?.reduce((amount, item) => item.price + amount, 0);

//we manupilate the state through actions via action types, just like on redux
function reducer(state, action) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, user: action.user
            }


        //updating basket on refresh (fetch data from firebase store)
        case 'UPDATE_BASKET':
            let updatdBasket = []
            action.payload.map(doc => updatdBasket.push(doc.data()))
            return {
                ...state, basket: updatdBasket
            }


        //*After every action we must return what the new state looks like
        //add to basket action type
        case 'ADD_TO_BASKET':
            //what the new data layer will look like, whenever we dispatch the actions
            return { 
                //whatever the state is, return it all
                ...state,   
//we return the current state basket, along with the payload the action currently had, in other words
//we take the old basket, append the new item that we sent an action with, and return the new basket
                basket: [...state.basket, action.payload]
            }


        case 'REMOVE_FROM_BASKET':
            let tempCurrentBasket = [...state.basket]
            //check if the id of the item we removed (action.id) is equal to an item id of our basket, which must return the index
            let indexOfItem = state.basket.findIndex(basketItem => basketItem.id === action.id);

            if(indexOfItem >= 0) {
                //item exists in basket, remove it
                //at found index, remove 1 item, it removes 1 item from that index
                tempCurrentBasket.splice(indexOfItem, 1);

                //update our database, remove all the documents and re-update with the updated basket
                db.collection('basketItems').get().then(
                    res => res.forEach(element => element.ref.delete())
                )
                tempCurrentBasket.forEach(item => {
                    db.collection('basketItems').add({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        rating: item.rating
                    })
                })
            } else {
                console.warn(`Cant remove product {id: ${action.id}, as it is not in the basket}`)
            }
            return {
                //return the same state, but our new spliced basket
                ...state, basket: tempCurrentBasket
            }
        //if there's no action just return the state
        default:
            return state;
    }
}

export default reducer;