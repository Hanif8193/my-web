import React from 'react'
import {Bungee} from 'next/font/google'

const bungee = Bungee({
  weight:"400",
  subsets:['latin'],
  display: "swap"
})


const Header = () => {
  return (
    <div className={bungee.className}>
    <div style={{backgroundImage: "url('/Bg.png')"}} className='border-t py-10 items-center px-14 tracking-widest'>
      <h1 className=' text-white sm:text-1xl md:text-2xl lg:  text-5xl font-bold px-24 '>SOCIAL MEDIA</h1>
      <h1 className=' text-yellow-500  sm:text-1xl md:text-2xl text-5xl font-bold px-32'>MARKETING</h1>
    </div>
     </div>
  )
}

export default Header
