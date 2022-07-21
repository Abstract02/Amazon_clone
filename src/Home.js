import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home_main'>
            <div className='home'>
                <div className='home_container'>
                    <img className='home_backimg' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="background_image" />
                </div>
                <div className='home_row'>
                    <Product image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066730601" title="Apple iPad 2021 / Space Gray / Wi-Fi / 64GB" rating={4} price="41999" />
                    <Product image="https://rukminim2.flixcart.com/image/416/416/kybvo280/book/n/d/n/-original-imagah76agfy2gzy.jpeg?q=70" title="Life is What You Make it  (English, Paperback, Shenoy Preeti)" rating={4} price="195.50" />
                </div>
                <div className='home_row'>
                    <Product image="https://vlebazaar.in/image/cache/catalog/nos/6113mS+xhyL._SL1500_-1000x1000.jpg" title="NOISE COLORFIT PRO FITNESS WATCH (BLACK)" rating={3} price="1999" />
                    <Product image="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-960,/pub/media/catalog/product/n/y/nyfamzn000001_2_682a60c2.jpg?rnd=20200526195200" title="Amazon Echo Dot (3rd Gen) - #1 Smart Speaker Brand In India with Alexa (Black)" rating={4} price="2499" />
                    <Product image="https://static-ecapac.acer.com/media/catalog/product/cache/6523387fa80e14e7b37310b4db9abc2c/a/c/acer-extensa-15-ex215-21-21g-31-wp-win10-01_1_1_1_1.jpg" title="Acer Aspire 3 Laptop (AMD 3020e Dual-Core Processor/4 GB/1TB HDD/Win11 Home/1.9kgs) 35.56 Cm (14-Inch) HD Display, A314-22" rating={5} price="39999" />
                </div>
                <div className='home_row'>
                    <Product style = "color:yellow;" image="https://res.cloudinary.com/sharp-consumer-eu/image/upload/f_auto,q_90/f_auto,q_auto/v1596096517/soundbar-kategorie-scaled.jpg" title="2.0 SOUNDBAR WITH HDMI & BLUETOOTH®" rating={3} price="3499" />
                </div>
            </div>
            
        </div>
    )
}

export default Home