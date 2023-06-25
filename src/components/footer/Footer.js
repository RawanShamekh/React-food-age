import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 links' >
                    <a href='#'>Register</a>
                    <a href='#'>Forum</a>
                    <a href='#'>Affiliate</a>
                    <a href='#'>FAQ</a>

                   

                </div>
                <div className='col-md-12 social'>
                <a href='#' className="fa-brands fa-facebook-f"></a>
                <a href='#' className="fa-brands fa-twitter"></a>
                <a href='#'className="fa-brands fa-youtube"></a>
               
                <a href='#' className="fa-brands fa-dribbble"></a>
                <a href='#' className="fa-brands fa-linkedin-in"></a>
                <a href='#' className="fa-brands fa-instagram"></a>
                    
                </div>
                <div className='col-md-12'>
                    <p>© 2021. Foodera. All rights reserved.</p>
                    
                </div>


            </div>
        </div>
    </section>
    </>
  )
}
