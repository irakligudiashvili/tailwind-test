import { Flame } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <a href="#" className='relative z-10'> 
        <div className='absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 dounded-xl blur opacity-25 hover:opacity-50 transition duration-300'></div>
        <Flame className='text-red-600 w-10 h-10' />
    </a>
  )
}

export default Logo