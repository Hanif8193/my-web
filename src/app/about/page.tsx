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

<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum perferendis numquam, 
  sed saepe excepturi possimus! Numquam tenetur nulla amet.</p>

    </div>
  )
}

export default About
