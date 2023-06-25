import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import img1 from './../../assets/p1.jpg'
import img2 from './../../assets/p2.jpg'




export const Slider = () => {
  
  return (
    <section className='slider'  id="review">
        <h2>Testimonials</h2>

    <Carousel>
      <Carousel.Item>
        <div className='slideImg'>
        <img
          
          src={img1}
          alt="First slide"
        />
        </div>
        
        <Carousel.Caption>
          
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slideImg'>
      <img
          
          src={img2}
          alt="First slide"
        />

</div>
        <Carousel.Caption>
          
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slideImg'>
        <img
          
          src={img2}
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
         
          <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</p>
        </Carousel.Caption>
      </Carousel.Item>
   
      
    </Carousel>

    </section>
  )
}
