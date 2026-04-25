import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        }
        else {
            setShowLogin(true);
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} >
            <div className='flex justify-center my-20'>
                <div className='flex items-center gap-2 bg-white px-6 py-2 rounded-full border border-neutral-500'>

                    <p className='text-stone-500'>
                        Best text to image generator
                    </p>

                    <img src={assets.rating_star} alt="" className='w-5 h-5' />

                </div>
            </div>
            <h1 className='text-5xl max-w[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-300'>image</span>, in seconds.</h1>
            <p className='text-center max-w-xl mx-auto mt-5'>Turn your imagination into reality with our advanced AI text-to-image generator. Simply enter a prompt, and our intelligent model will create high-quality, unique images in seconds. Perfect for designers, creators, and anyone looking to bring their ideas to life visually.</p>
            <button onClick={onClickHandler} className='mx-auto mt-8 px-6 py-2.5 flex items-center justify-center gap-2 rounded-full bg-black text-white text-sm sm:text-base font-medium shadow-md hover:scale-105 hover:bg-neutral-800 transition-all duration-200'>
                Generate Images
                <img className='h-5' src={assets.star_group} alt="" />
            </button>
            <div className='flex justify-center gap-3 mt-16 '>
                {Array(6).fill('').map((item, index) => (
                    <img className='rounded hower:scale-105 transition-all duration-300 
            cursor-pointer max-sm:w-10' src={assets.butterfly} alt="" key={index} width={70} />
                ))}
            </div>
            <p className=' flex justify-center mt-2 text-netural-600'>General images from imagify</p>
        </motion.div>
    )
}

export default Header
