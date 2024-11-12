
import React from 'react'
import Image from 'next/image'
import p2 from '../../../public/p2.png'

function Second() {
  return (
    <div style={{backgroundImage: "url('/Bg.png')"}}>
      <Image src={p2} alt='IMG' width={1000}height={1000}/>
    </div>
  )
}

export default Second
