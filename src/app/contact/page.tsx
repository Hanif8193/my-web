import Link from 'next/link'
import React from 'react'

function contact() {
  return (
    <div>
      Contact Us

<Link href={"/about"}></Link>
<Link href={"/project"}></Link>
<Link href={"/services"}></Link>

    </div>
  )
}

export default contact
