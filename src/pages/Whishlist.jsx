import React from 'react'
import Header from '../components/Header'

function Whishlist() {
  return (
      <>
       <Header/>
    <div style={{paddingTop:'100px'}} className='mx-5 mb-25'>
       <div className="grid grid-cols-4 gap-4">
        <div className='rounded p-2 shadow'>
          {/* image */}
          <img height={'200px'} src="https://crepdogcrew.com/cdn/shop/files/Travis_scott_low_og_olive_white_bg_2x_49cc2a7e-f9e0-4240-ba2d-58794a26fbdf.jpg?v=1755096850&width=3000" alt="product" />
          <div className='text-center'>
            {/* title */}
            <h3 className='text-xl'>Jordan 1 Retro Low OG SP Travis Scott Olive (W) - WHITE / UK 6.5</h3>
            {/* link */} 
            <div className='justify-between mt-3 px-5 flex'>
              <button> <i class="fa-solid fa-heart-circle-xmark text-red-500"></i> </button>
              <button><i class="fa-solid fa-cart-plus text-green-500"></i> </button>
            </div>
          </div>
        </div>
       </div>
    </div></>
  )
}

export default Whishlist