import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import about_video from '../../assets/video.mp4'

const About = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <div className='about' id='about'>
        <div className="about-left" style={{position: 'relative'}}>
            <img src={about_img} alt="" />
            <img 
              src={play_icon} 
              alt="Play" 
              className="about-play-icon"
              onClick={() => setShowVideo(true)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 64,
                height: 64,
                cursor: 'pointer',
                zIndex: 2
              }}
            />
            {showVideo && (
              <VideoPlayer playState={showVideo} setPlayState={setShowVideo} videoSrc={about_video} />
            )}
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Experience excellence in education with our comprehensive programs designed to shape the leaders of tomorrow. Our university combines traditional academic rigor with innovative teaching methodologies to provide students with a well-rounded educational experience.</p>
            <p>With state-of-the-art facilities, experienced faculty, and a commitment to academic excellence, we prepare our students for successful careers in their chosen fields.</p>
            <div className="about-features">
                <div className="about-feature">
                    <img src={about_img} alt="" />
                    <div>
                        <h5>Global Education</h5>
                        <p>Access to world-class education standards</p>
                    </div>
                </div>
                <div className="about-feature">
                    <img src="https://img.icons8.com/color/48/000000/certificate.png" alt="" />
                    <div>
                        <h5>Certified Programs</h5>
                        <p>Internationally recognized certifications</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About 