import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <ul className="flex gap-5 py-5">
            <li>Blog Details</li>
            <li>More Details</li>
        </ul>
        {children}
    </div>
  )
}

export default Layout