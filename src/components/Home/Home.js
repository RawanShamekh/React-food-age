import React from 'react'
import { Header } from '../Header/Header';
import './Home.css';
import prideImage from './../../assets/2.png';
import ingredientImage from './../../assets/3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Order } from '../Order/Order';
import { Slider } from '../Slider/Slider';
import ques from './Ques';
import { Footer } from '../footer/Footer';



export const Home = () => {
  return (
    <>
    <Header />
    {/* Numbers Section */}
    <section className='numbers' >
      <div className='container'>
        <div className='row smooth'>
          <div className='col-md-3  '>
            <h3 > 1287+</h3>
            <h6 >SAVINGS</h6>

          </div>
          <div className='col-md-3 ' >
            <h3>5786+</h3>
            <h6>PHOTOS</h6>

          </div>
          <div className='col-md-3 ' >
            <h3>1440+</h3>
            <h6>ROCKETS</h6>

          </div>
          <div className='col-md-3 ' >
            <h3>7110+</h3>
            <h6>GLOBES</h6>

          </div>
        </div>
      </div>

    </section>
    {/* Pride Section */}
    <section className='pride' id="about">
      <div className='container'>
        <div className='row'>
          <div className=' col-12 col-lg-6 mt-5  ' data-aos="flip-up" data-aos-delay="80"> 
            <img  src={prideImage} title='pride'/>

          </div>
          <div className='  col-12 col-lg-6 mt-5 '>
            <h2>We pride ourselves on making real food from the best ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
            <button>learn more</button>

</div>
        </div>
      </div>
    </section>
   {/* ingredients Section */}
   <div className='ingredient'>
    <div className='container'>
      <div className='row mt-5 mb-3'>
        <div className='col-12 col-lg-6'>
          <h2>We make everything by hand with the best possible ingredients.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <ul>
            <li>Etiam sed dolor ac diam volutpat.</li>
            <li>Erat volutpat aliquet imperdiet.</li>
            <li>purus a odio finibus bibendum.</li>

          </ul>
          <button data-aos="zoom-in">Learn more</button>



        </div>
        <div className='col-12 col-lg-6' data-aos="fade-up">
          <img src={ingredientImage}/>
          
        </div>
      </div>
    </div>
   </div>
   {/* Paralax section  */}
    <section className='paralax'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2>When a man's stomach is full it makes no<br/>  
                difference whether he is rich or poor.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/>
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <a href='#'>Watch Our Story</a>

          </div>
        </div>
      </div>

    </section>
    {/* Explore Section */}
    <section className='explore' id="food">
      <div className='container'>
        <div className='row  row1'>
          <div className='col-md-12'>
          <h2>Explore Our Foods</h2>

          </div>
          <div className='col-md-12'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          </div>
        </div>
        <div className='row row2'>
          <Order/>

        </div>
      </div>
    </section>
    <Slider/>
    {/* Questions Section  */}
    <section className='question' id='faq'>
      <div className='container'>
        <div className='row '  >
          <h2>Frequently Asked Questions</h2>

        </div>
        <div className='row' >
          {ques.map((item,index)=>{
            return (
              <div className='col-md-6' key={index}>
              <span>~</span>
              <span>{item}</span>
              <p> Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
  
            </div>

            );
          })}
         

        </div>
      </div>
    </section>
    {/* Baked Section  */}
    <section className='baked'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <h2>
Baked fresh daily by bakers with passion.</h2>

          </div>
          <div className='col-md-4'>
            <button  data-aos="fade-up">Learn More</button>

          </div>
        </div>
      </div>
    </section>
    <section className='subscribe'>
      <div className='container'>
        <div className='row'>
          <h2>Hurry up! Subscribe our newsletter
            <br></br>
and get 25% Off</h2>
<p>Limited time offer for this month. No credit card required.</p>
</div>
<form  className='row'>
<div className='col-md-8'><input className="e-mail" placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email"></input></div>
<div className='col-md-4'> <button className="btn btn-primary btn-block" type="submit">Subscribe</button></div>

</form>
        </div>
     
    </section>
        {/* Footer Section  */}
        <Footer/>
    
    </>
  )
}
