import React from 'react'
import './Home.css'
import Product from './Product'

//data obtained from scraping amazon
import data from './data.json';

var products = data.products;

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2020/Programming/071020_TheSummerSessions/073120/UK-EN_071020_SummerSessions_ACQ_GW_Hero_D_1500x600_CV5._CB409228348_.jpg" 
                alt="Banner" className="home__image"
            />

            <div className="home__row">
                {/*products, take id, title, price, rating and image*/}
                <Product id={1} title={products[0].title} price={products[0].price} rating={products[0].rating} image={products[0].image} />
                <Product id={2} title={products[1].title} price={products[1].price} rating={products[1].rating} image={products[1].image} />
            </div>

            <div className="home__row">
                <Product id={3} title={products[2].title} price={products[2].price} rating={products[2].rating} image={products[2].image} />
                <Product id={4} title={products[3].title} price={products[3].price} rating={products[3].rating} image={products[3].image} />
                <Product id={5} title={products[4].title} price={products[4].price} rating={products[4].rating} image={products[4].image} />
            </div>

            <div className="home__row">
                <Product id={6} title={products[5].title} price={products[5].price} rating={products[5].rating} image={products[5].image} />
            </div>

            <div className="home__row">
                <Product id={7} title={products[6].title} price={products[6].price} rating={products[6].rating} image={products[6].image} />
                <Product id={8} title={products[7].title} price={products[7].price} rating={products[7].rating} image={products[7].image} />
            </div>

            <div className="home__row">
                <Product id={9} title={products[8].title} price={products[8].price} rating={products[8].rating} image={products[8].image} />
                <Product id={10} title={products[9].title} price={products[9].price} rating={products[9].rating} image={products[9].image} />
                <Product id={11} title={products[10].title} price={products[10].price} rating={products[10].rating} image={products[10].image} />
            </div>

            <div className="home__row">
                <Product id={12} title={products[11].title} price={products[11].price} rating={products[11].rating} image={products[11].image} />
            </div>

            <div className="home__row">
                <Product id={13} title={products[12].title} price={products[12].price} rating={products[12].rating} image={products[12].image} />
                <Product id={14} title={products[13].title} price={products[13].price} rating={products[13].rating} image={products[13].image} />
            </div>
        </div>
    )
}

export default Home
