import React from "react";
import {useRef} from 'react';
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
const slider=useRef();

let tx=0;

const slideForward = () => {
  if(tx>-50){
    tx-=25;
  }
  slider.current.style.transform= `translateX(${tx}%)`;
}
const slidebackward = () => {
if(tx<0){
  tx+=25;
}
slider.current.style.transform=`translate(${tx}%)`;
}
//Note:-
////////THIS AS the condition we used   for above  for slides
//this condition is for preventing the slide to go more than its limit
// similarly for backward slide also the condition is made to prevent it from going more than its limit
//if the tx value is greater than -50 then only it will slide forward
//if the tx value is less than 0 then only it will slide backward
//25% is the width of each slide
//4 slides are there so the total width is 100%
//so the maximum negative translation will be -75% but here we are using -50% to show only 3 slides at a time
//you can adjust it according to your requirement

  return (
    <div className="Testimonials">
      <img src={next_icon} alt="" className="naxt-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slidebackward} />

      <div className="slider">
        <ul ref={slider} >
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jackson</h3>
                  <span>Califoinia,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
    
    
     
      
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Williams</h3>
                  <span>Califoinia,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>



    
      
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emily</h3>
                  <span>Califoinia,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
       
     


  
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jack</h3>
                  <span>Califoinia,USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Testimonials;
