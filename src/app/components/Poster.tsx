import React from 'react'
import Image from 'next/image'
import p1 from '../../../public/p1.png'

function Poster() {
  return (
    <div style={{ backgroundImage: "url('/bg.png')" }} className='f'>
      <Image src={p1} alt='IMG'  width={1000}height={1000}/>
    </div>
  )
}

export default Poster

