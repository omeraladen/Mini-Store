import React from 'react';
import Leaf from '../../assets/leaf.png'
import './home.styles.scss';

function Home() {
  return (
    <div className='home'>
        <div className="info">
           <h1>Picaroon Growshop fur <br /> erfolgreiches Homegrowing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam eius ipsum sit quia
               dolorum nihil, recusandae modi necessitatibus 
              
            </p>
             <button className='main-btn'>Talk Shop Picaroon <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="right-img">
            <div className="circle">
              <img src={Leaf} alt="" className='leaf' />
              <h2>Great LifeStyle</h2>
            </div>
        </div>
        <div className="bullets">
        <i class="fa-regular fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle-pause"></i>
        </div>
    </div>
  )
}

export default Home;