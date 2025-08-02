import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const MainCarousel = () => {
  const items = mainCarouselData.map((item) =>
    item.image ? (
      <img
        key={item.image}
        className='cursor-pointer -z-10'
        role='presentation'
        src={item.image}
        alt="carousel item"
      />
    ) : null
  )
  

  return (
     
    <AliceCarousel
        
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
       
    />
  )
}

export default MainCarousel
