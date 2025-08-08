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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='GALLERY' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimoials />
        <Title subTitle='CONTACT US' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer />
    </div>
  )
}

export default App 