import React from 'react'

const DetailsBlogPage = ({params}) => {
    const id = params.id
  return (
    <div>
        <p className='text-5xl font-bold text-center' >Details Blog Page {id}</p>
    </div>
  )
}

export default DetailsBlogPage