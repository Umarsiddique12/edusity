import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About University" className='about-img' />
        <img
          src={play_icon}
          alt="Play Video"
          className='play-icon'
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's comprehensive programs. Our cutting-edge curriculum empowers students with the knowledge, skills, and experiences needed to excel.
          <br /><br />
          With a focus on innovation, hands-on learning, and mentorship, we prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
          <br /><br />
          Whether you aspire to become a teacher, administrator, or educational leader, our programs offer the perfect pathway to shape the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
