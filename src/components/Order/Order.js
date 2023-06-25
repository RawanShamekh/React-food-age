import React from 'react'
import Data from './../../Data';
import './Order.css';



export const Order = () => {
  return (

    <>
     { Data.map((item,index)=>{
        return (
            <div className=' col-md-6 col-lg-4 box' key={index} >
                <img src={item.image} title ="food"/>
                <h5>{item.title}</h5>
                <p>{item.time}</p>
                <span>{item.price1}</span>
                <span>{item.price2}</span>
                <hr></hr>
                <button>Order Now</button>
               
            </div>

        );

     })}

    </>
    
  )
}
