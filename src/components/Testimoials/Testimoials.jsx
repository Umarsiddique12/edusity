import React, { useRef } from 'react'
import './testimoials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import users_1 from '../../assets/user-1.png'
import users_2 from '../../assets/user-2.png'
import users_3 from '../../assets/user-3.png'
import users_4 from '../../assets/user-4.png'


const Testimoials = () => {

    const slider= useRef();
    let tx=0;

const sliderForward=()=>{
    if(tx>-50){
        tx -=25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;

}

const sliderBackward=()=>{
    if(tx<0){
        tx+= 25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;

}





  return (
    <div className='testimoials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sliderForward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={sliderBackward}/>
        <div className="slider">
            <ul ref={slider} >
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={users_1} alt="" />
                            <div>
                                <h3>Wiliam Jackson1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={users_2} alt="" />
                            <div>
                                <h3>Wiliam Jackson2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={users_3} alt="" />
                            <div>
                                <h3>Wiliam Jackson3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={users_4} alt="" />
                            <div>
                                <h3>Wiliam Jackson4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimoials
