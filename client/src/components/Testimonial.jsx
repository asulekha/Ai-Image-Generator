import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"
const Testimonial = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-20 px-4'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-gray-800'>
                Customer Testimonials
            </h1>
            <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>

            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((items, index) => (
                    <div
                        key={index}
                        className='bg-white p-8 rounded-2xl shadow-lg w-80 h-90 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2'
                    >
                        <img
                            className='rounded-full w-16 h-16 mx-auto border-2 border-gray-200'
                            src={items.image}
                            alt=""
                        />

                        <h2 className='text-lg font-semibold mt-4 text-gray-800'>
                            {items.name}
                        </h2>

                        <p className='text-gray-500 text-sm'>{items.role}</p>

                        <div className='flex justify-center gap-1 my-3'>
                            {Array(items.stars).fill().map((_, i) => (
                                <img key={i} src={assets.rating_star} className='w-5' />
                            ))}
                        </div>

                        <p className='text-sm text-gray-600 leading-relaxed'>
                            {items.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonial