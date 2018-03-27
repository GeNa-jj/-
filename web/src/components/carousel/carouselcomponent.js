import React from 'react'

import './carousel.scss'
export default class CarouselComponent extends React.Component{
   
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="src/assets/imgs/index8.jpg"  /></div>
                    <div className="swiper-slide"><img src="src/assets/imgs/index8.jpg" /></div>
                    <div className="swiper-slide"><img src="src/assets/imgs/index9.jpg" /></div>
                    <div className="swiper-slide"><img src="src/assets/imgs/index10.jpg" /></div>
                    <div className="swiper-slide"><img src="src/assets/imgs/index11.jpg" /></div>
                    <div className="swiper-slide"><img src="src/assets/imgs/index7.jpg" /></div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        )
    }
}