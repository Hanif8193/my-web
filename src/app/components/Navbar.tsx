import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Im from "/public/log.png"


function Navbar() {
  return (
    <div style={{ backgroundImage: "url('/bg.png')" }} >
    <div className=' flex justify-between items-center text-white py-5 px-5'>
      
      
      <Link href={"/about"}> About Us</Link>
     <span className='text-yellow-600' > <Link href={"project"}> Project</Link> </span>
     <h1>DIGITAL</h1>
      
      <Link href={"/services"}> Services</Link>
      <Link href={"/contact"}> Contact Us</Link>
    

</div>


    </div>
  )
}

export default Navbar
