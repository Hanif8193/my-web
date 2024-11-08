import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div>
      About Us
<Link href={"/about"}> </Link>
<Link href={"/project"}></Link>
<Link href={"/sevices"}></Link>
<Link href={"/contact"}></Link>


    </div>
  )
}

export default About
