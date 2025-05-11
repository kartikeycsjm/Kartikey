'use client'
import { sendMail } from './action'
import React from 'react'
import { useState, useRef } from 'react'
import { Loader2 } from "lucide-react";
import { motion } from 'framer-motion'
import Image from 'next/image';

const page = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false)
  const formref = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const formdata = new FormData(e.currentTarget);
    const res = await sendMail(formdata)
    setMessage(res.message);
    setLoading(false);
    formref.current?.reset()
  }
  return (
    <div id='contact' className='w-full'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-2xl font-bold mb-4
        w-[85%] m-auto md:w-[90%]
        md:text-5xl">
        Get in touch
      </motion.h2>
      <div className='w-[85%] m-auto md:w-[90%]
      flex'>
        <div className='md:w-[50%] w-0 hidden
        md:flex items-center justify-center relative m-12'>
          <Image src={'/contact.png'}
            fill style={{ objectFit: 'cover' }}
            className='rounded-sm shadow-2xl'
            alt='hello'></Image>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          ref={formref} onSubmit={handleSubmit} className='w-[100%] 
          md:w-[50%]
          flex my-8
          items-center justify-center flex-col gap-12'>
          <input type="text" placeholder='Your Name' name='name'
            required
            className='p-3 border rounded-lg w-[100%] md:w-[400px]
          border-gray-400 focus:outline-none
          focus:border-white' />
          <input type="email" placeholder='Your Email' name='email'
            required
            className='p-3 border rounded-lg w-[100%] md:w-[400px]
          border-gray-400 focus:outline-none
          focus:border-white' />
          <textarea name="message" id="" placeholder='Your Message'
            rows={4} required
            className='p-3 border resize-none rounded-lg 
          w-[100%] md:w-[400px]
          border-gray-400 focus:outline-none
          focus:border-white'>
          </textarea>
          <button type='submit'
            className='bg-[#14b8a6]
                      hover:bg-[#0d9488]
          block text-center
          text-white
          text-[18px] w-[100%] p-3 md:w-[400px]
          rounded-lg duration-300 shadow-2xl'>
            {loading ?
              <>
                <Loader2 className='animate-spin' />
              </>
              : (`${message}` || 'Send Message')
            }
          </button>
        </motion.form>
      </div>
    </div>
  )
}

export default page