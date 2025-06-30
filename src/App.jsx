import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimoials from './components/Testimoials/Testimoials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {

  const[playState, setPlayState]=useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What Wr Offer' />
        <Programs/>
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle='TESTIMOIALS' title='What Student Says' />
        <Testimoials/>
        <Title subTitle='Contact us' title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState}  setPlayState={setPlayState} />

    </div>
  )
}

export default App
