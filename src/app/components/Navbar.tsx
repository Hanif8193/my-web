import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div style={{ backgroundImage: "url('/bg.png')" }} >
    <div className=' flex justify-between items-center text-white py-5'>
      
      
      <Link href={"/about"}> About Us</Link>
      <Link href={"project"}> Project</Link>
      <h1> DIGITAL</h1>
      <Link href={"/services"}> Services</Link>
      <Link href={"/contact"}> Contact Us</Link>
    

</div>


    </div>
  )
}

export default Navbar
