import React from 'react'
import img1 from '../src/assets/img/love.png'
import img2 from '../src/assets/img/shopping-bag.png'
import img3 from '../src/assets/img/sam1.png'
import img4 from '../src/assets/img/love.png'
import img5 from '../src/assets/img/sam.jpeg'

function content() {
  return (
    <div className=''>
      <div className=' sm:p-40 sm:px-72 ' style={{backgroundImage:`url(${img5})`}}>
       <div className='rounded-5xl  bg-gray-900 rounded-3xl sm:p-12'>
       <div className=''>
           <div className='flex flex-col text-center sm:flex-row place-content-between'>
            <nav>
                <ul className='text-white sm:flex flex-row gap-8'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">contacts</a></li>
                </ul>
            </nav>
           <div className='flex gap-5'>
           <img src={img1} alt="" />
            <img src={img2} alt="" />
           </div>
           </div>
        </div>
        <div className='mt-10  flex flex-col sm:flex-row items-center place-content-around '>
            <div className='items-center'>
                <img className='w-96' src={img3} alt="" />
            </div>
            <div className=' flex text-center sm:flex flex-col man-w-xl gap-4'>
                <p className='text-2xl sm:text-5xl text-white'><b>Headphones true samsung</b></p>
                <p className='text-white'>Very compact and great device for music purposes</p>
               <div className='flex flex-col sm:flex-row gap-5'>
               <button className='text-white bg-pink-300 rounded-xl p-1 px-5'>Buy now</button>
                <button className=' border-2 border-pink-400 px-5 rounded-xl'><img src={img4} alt="" /></button>
               </div>

            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default content
