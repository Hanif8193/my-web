import React from 'react'

function Seclast() {
  return (
    <div style={{backgroundImage:"url('/bg.png')"}}>
      <div className='bg-yellow-500 px-20 py-10 text-center rounded-2xl  ml-16 mr-16 '>
        <h1 className=' text-3xl font-bold px-10 py-2'>READY TO STAND OUT</h1>
        <h1 className='text-3xl font-bold px-10 '>ON SOCIAL MEDIA?</h1>
        <div >
        <button className='bg-black text-white text-1xl font-bold  py-2  px-10   rounded-3xl mt-10'>TALK NOW</button>
        <button className=' text-black text-1xl font-bold px-10 py-2 bg-transparent border border-gray-800 rounded-3xl gap-5'> FOLLOW US</button>
      </div>
      </div>
    </div>
  )
}

export default Seclast

