import React from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




import {useEffect} from "react";
export const Header = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   
  
   <>
  <header id='home'>
    <div className='container'>
      <div className='row' >
        <div className='col-md-5 col-12 col-sm-12' data-aos="fade-right" >
          <h1 >Good food choices are good investments.</h1>
          <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
        
      
      <button >
            Order now <i className="fa-solid fa-cart-shopping " style={{marginLeft:"8px"}}></i>
          </button>
          <button >Learn More  <i className="fa-solid fa-angle-up fa-rotate-90" style={{marginLeft:"8px"}}></i></button>
        
         
          </div>
          <div className='col-md-6 '>
            </div>
      </div>
    </div>

    
  </header>
   </>
  )
}
