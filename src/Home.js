import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2020/Programming/071020_TheSummerSessions/073120/UK-EN_071020_SummerSessions_ACQ_GW_Hero_D_1500x600_CV5._CB409228348_.jpg" 
                alt="Banner" className="home__image"
            />

            <div className="home__row">
                {/*products, take id, title, price, rating and image*/}
                <Product id={1} title="Some images title" price={10} rating={5}
                    image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
                />
                <Product id={2} title="Some images title" price={10} rating={5}
                    image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
                />
            </div>

            <div className="home__row">
                {/*products, take id, title, price, rating and image*/}
                <Product id={3} title="Some images title" price={10} rating={5}
                    image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
                />
                <Product id={4} title="Some images title" price={10} rating={5}
                    image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
                />
                <Product id={5} title="Some images title" price={10} rating={5}
                    image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
                />
            </div>

            <div className="home__row">
                <Product id={6} title="Some images title" price={10} rating={5}
                    image="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
                />
            </div>
        </div>
    )
}

export default Home
