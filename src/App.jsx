import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Counter from './components/Counter'
import Clients from './components/Clients'
import Founders from './components/Founders'
import Logoclient from './components/Logoclient'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About/>
    <Founders />
    <Services />
    <Counter />
    <Logoclient />
    <Clients />
    <Contact />
    <Footer />
    </>

  )
}

export default App
