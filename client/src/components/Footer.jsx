import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex items-center justify-between gap-0py-3 mt-20'>
            <img className='w-12' src={assets.logo} alt="" />
            <p className='flex-1 broder-l border-gray-400 pl-4 text-sm
      text-gray-500 max-sm:hidden'>Copyright @sulekha | All right reserved.</p>
            <div className='flex gap-2.5'>
                <img src={assets.facebook} alt="" className=' w-10 h-10' />
                <img src={assets.twitter} alt="" className=' w-10 h-10' />
                <img src={assets.instagram} alt="" className=' w-10 h-10' />


            </div>
        </div>
    )
}

export default Footer
