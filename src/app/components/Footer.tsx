import React from 'react'
import Image from 'next/image'
import f1 from "/public/footer.png"

function Footer() {
  return (
    <div>
      <div style={{ backgroundImage: "url('/Bg.png')" }}>
      <div className=" text-white flex  justify-between items-center py-5 gap-10 px-10">
        <div className="py-5">
          {/* left section */}
          <Image src={f1}alt="Img"  width={1000} height={1000}/>
          
          </div>
          </div>
</div>
      
    </div>
  )
}

export default Footer

