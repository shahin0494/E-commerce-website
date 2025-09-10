import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


function Cart() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='mx-5'>
        <h1 className='text-5xl font-bold my-5 '>Cart Summary</h1>
        <div className='grid grid-cols-3 gap-4'>
          {/* table */}
          <div className='col-span-2 rounded shadow p-5'>
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <td className="font-semibold">#</td>
                  <td className="font-semibold">Name</td>
                  <td className="font-semibold">Image</td>
                  <td className="font-semibold">Quantiy</td>
                  <td className="font-semibold">Price</td>
                  <td className="font-semibold">...</td>
                </tr>
              </thead>
              <tbody>
                {/* duplicate according to cart array */}
                <tr>
                  <td>1.</td>
                  <td>Jordan 1 Retro Low OG SP Travis Scott Olive (W)</td>
                  <td><img width={'90px'} height={'90px'} src="https://crepdogcrew.com/cdn/shop/files/Travis_scott_low_og_olive_white_bg_2x_49cc2a7e-f9e0-4240-ba2d-58794a26fbdf.jpg?v=1755096850&width=1400" alt="" /></td>
                  <td>
                    <div className='flex'>
                      <button className='font-bold'>-</button>
                      <input className='border p-1 mx-3 rounded ' style={{ width: '40px' }} type="text" value={10} readOnly />
                      <button className='font-bold'>+</button>

                    </div>
                  </td>
                  <td>MRP ₹102,499</td>
                  <td><button><i class="fa-regular fa-trash-can text-red-500 text-xl"></i></button></td>
                </tr>
              </tbody>
            </table>
            <div className='float-right mt-4'>
              <button className='bg-red-800 text-white text-l p-3 rounded mx-2'>EMPTY CART</button>
              <Link to={'/'} className='bg-blue-950 text-white text-l p-3 rounded mx-2'>SHOP MORE</Link>
            </div>
          </div>
          {/* total */}
            <div className='col-span-1 rounded shadow p-5'>
              <h2 className='font-bold text-2xl '>Total Amount : <span className='text-stone-600 '>₹ 102,499</span></h2>
              <hr />
              <button className='rounded bg-green-600 p-2 text-white w-full mt-4 '>CHECK OUT !</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart