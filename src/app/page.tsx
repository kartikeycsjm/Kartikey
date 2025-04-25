import React from 'react'
import Header from './component/Header'
import About from './component/About'
import WhatsUp from './component/WhatsUp'
const page = () => {
  return (
    <div className='w-full'>
      <Header />
      <About />
      <WhatsUp />
    </div>
  )
}

export default page