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
    <div className='testimoials' id='testimoials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sliderForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={sliderBackward}/>
        <div className="slider">
            <ul ref={slider} >
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={users_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
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
                                <h3>Maria Johnson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>The faculty here is exceptional and the learning environment is truly inspiring. I've grown both academically and personally during my time at Edusity.</p>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={users_3} alt="" />
                            <div>
                                <h3>David Smith</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Edusity has provided me with the perfect foundation for my career. The practical experience and industry connections have been invaluable.</p>
                        
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={users_4} alt="" />
                            <div>
                                <h3>Lisa Brown</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>I'm grateful for the opportunities Edusity has provided. The research facilities and mentorship programs are world-class.</p>
                        
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimoials
