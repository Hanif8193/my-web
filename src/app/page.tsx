
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Middle from './components/Middle'
import Poster from './components/Poster'
import Grid from './components/Grid'
import Second from './components/Second'
import Seclast from './components/Seclast'
import Footer from './components/Footer'
import Button from './components/Button'

function Home() {
  return (
    <div>
    <Navbar/>
    <Header/>
    
    <Poster/>
    <Second/>
    <Middle/>
    <Button/>
    <Grid/>
    
    <Seclast/>
    <Footer/>
    </div>
  )
}

export default Home
