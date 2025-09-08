import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <p>Page Not found</p>
       <p> Go to<Link href={'/'}>Home</Link> Page </p>
    </div>
  )
}

export default NotFound