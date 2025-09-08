import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-center font-bold  bg-gray-500' >
         <ul className="flex justify-center gap-5 py-5">
          <li><Link href={'/'}>Home</Link> </li>
          <li><Link href={'/about'}>About</Link> </li>
          <li><Link href={'/blog'}>Blog</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar