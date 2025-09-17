import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartitem, incrementQuantity, decrementQuantity, emptyCart } from '../redux/slices/cartSlice'


function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    if (userCart?.length > 0) {
      setTotalCart(Math.ceil(userCart?.map(item => item.totalPrice)?.reduce((prev, curr) => prev + curr)))
    }
  }, [userCart])

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id))
    }
    else {
      dispatch(removeCartitem(product.id))
    }
  }

  const checkOut = () => {
    dispatch(emptyCart())
    alert("Order Confirmed Thank You for Shopping With Us...")
    navigate('/')
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='mx-5'>
        <h1 className='text-5xl font-bold my-5 '>Cart Summary</h1>
        {
          userCart?.length > 0 ?
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
                    {
                      userCart?.map((product, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td><Link to={`/${product?.id}/view`} className='text-blue-500 underline'>{product?.title?.slice(0, 20)}...</Link></td>
                          <td><img width={'90px'} height={'90px'} src={product?.thumbnail} alt="" /></td>
                          <td>
                            <div className='flex'>
                              <button onClick={() => dispatch(handleDecrementQuantity(product))} className='font-bold text-4xl'>-</button>
                              <input className='border p-1 mx-3 rounded ' style={{ width: '40px' }} type="text" value={product?.quantity} readOnly />
                              <button onClick={() => dispatch(incrementQuantity(product?.id))} className='font-bold text-4xl'>+</button>

                            </div>
                          </td>
                          <td>$ {product?.totalPrice}</td>
                          <td><button onClick={() => dispatch(removeCartitem(product?.id))}><i class="fa-regular fa-trash-can text-red-500 text-xl"></i></button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                <div className='float-right mt-4'>
                  <button onClick={() => dispatch(emptyCart())} className='bg-red-800 shadow text-white text-l p-3 rounded mx-2'>EMPTY CART</button>
                  <Link to={'/'} className='bg-blue-950 text-white text-l p-3 rounded mx-2'>SHOP MORE</Link>
                </div>
              </div>
              {/* total */}
              <div className='col-span-1 rounded shadow p-5'>
                <h2 className='font-bold text-2xl '>Total Amount : <span className='text-stone-600 '>${totalCart}</span></h2>
                <hr />
                <button onClick={checkOut} className='rounded bg-green-600 p-2 text-white w-full mt-4 '>CHECK OUT !</button>
              </div>
            </div>
            :
            <p>Your Cart is Empty</p>
        }
      </div>
    </>
  )
}

export default Cart