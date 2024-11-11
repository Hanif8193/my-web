import Link from 'next/link'
import React from 'react'

function contact() {
  return (
    <div>
      Contact Us

<Link href={"/about"}></Link>
<Link href={"/project"}></Link>
<Link href={"/services"}></Link>
<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
   Deserunt qui cupiditate ab facilis! Facilis, accusamus!</p>

    </div>
  )
}

export default contact
