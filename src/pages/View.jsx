import React from 'react'
import Header from '../components/Header'

function View() {
  return (
    <>
      <Header />
      <div className='mx-5'>
        <div className='grid grid-cols-2 gap-4 items-center'>
          <div className='flex justify-center items-center flex col'>
            <div >
              <img style={{ width: 'full', height: 'full' }} src="https://crepdogcrew.com/cdn/shop/files/Jordan1RetroLowOGSPTravisScottOlive2.png?v=1755096850&width=1000" alt="" />
            </div>
            <div className='flex flex-col items-center justify-between  mt-5' >
              <button className='rounded bg-blue-800 p-2 text-white'>ADD TO WHISHLIST</button>
              <button className='rounded bg-green-800 p-2 text-white'>ADD TO CART</button>
            </div>
          </div>
          <div>
            <h1 className='text-3xl '>Jordan 1 Retro Low OG SP Travis Scott Olive (W)</h1>
            <h2 className='text-2xl text-red-500 '>MRP ₹102,499</h2>
            <h3 className='text-xl mt-3 '><span>Nike</span>:Jordans</h3>
            <h3 className='text-xl  '><span>Category</span>:Travis Scott</h3>
            <h3 className='text-xl'><span>Description</span>:The Air Jordan 1 Low OG SP Travis Scott Olive features white leather and black nubuck on the upper, with a signature reverse Swoosh in olive green, which is a recurring element in Travis Scott's Air Jordan 1 collaborations. The midsole has a pre-yellowed appearance, adding to the overall vintage aesthetic of the shoe.

              The Air Jordan 1 Low OG SP Travis Scott Olive features a combination of leather and suede materials in sail white and black. The design includes Travis Scott’s signature “Cactus Jack” branding, which can be seen embroidered on the heel and tongue, as well as custom insoles.

              The Air Jordan 1 Low was originally released in several colourways, mirroring the High releases and served as a casual take on the signature high-top. Apart from basketball players, there was another group who immediately took to the AJ1 Low – skateboarders. The skateboarders found that the low-top was more comfortable for tricks.</h3>
            <h3 className='text-3xl my-5'>Client Reviews</h3>
            {/* review tab duplicated */}
            <div className='rounded shadow p-2 my-3'>
              <p><span className='font-bold'>Client Name</span>: message</p>
              <p>Rating : 3 <i className='fa-solid fa-star text-yellow-400'></i></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View