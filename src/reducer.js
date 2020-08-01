//we need access to these globally
export const initalState = {
    basket: []  //add to basket and many more areas need access to this, in order to actually update our basket
}

//we manupilate the state through actions via action types, just like on redux
function reducer(state, action) {
    console.log(action)
    switch(action.type) {
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
            return { state }
        //if there's no action just return the state
        default:
            return { state };
    }
}

export default reducer;