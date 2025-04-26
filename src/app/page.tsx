import React from 'react'
import Header from './component/Header'
import About from './component/About'
import WhatsUp from './component/WhatsUp'
import Contact from '@/app/(routes)/contact/page'
const page = () => {
  return (
    <div className='w-full'>
      <Header />
      <About />
      <WhatsUp />
      <Contact />
    </div>
  )
}

export default page