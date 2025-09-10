import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='mx-5'>
       <div className="grid grid-cols-4 gap-4">
        <div className='rounded p-2 shadow'>
          {/* image */}
          <img height={'200px'} src="https://crepdogcrew.com/cdn/shop/files/Travis_scott_low_og_olive_white_bg_2x_49cc2a7e-f9e0-4240-ba2d-58794a26fbdf.jpg?v=1755096850&width=3000" alt="product" />
          <div className='text-center'>
            {/* title */}
            <h3 className='text-xl'>Jordan 1 Retro Low OG SP Travis Scott Olive (W) - WHITE / UK 6.5</h3>
            {/* link */}
            <Link to={`/id/view`} className='bg-slate-800 p-1 rounded text-white inline-block mt-3' >View</Link>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Home