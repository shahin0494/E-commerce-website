import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'

function Header({insideHeader}) {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
    <nav className='flex justify-between p-5 text-2xl w-full bg-slate-800 text-white fixed w-full '>
      <Link to={'/'}> <i class="fa-solid fa-truck-ramp-box me-1"></i>  Cartico</Link>
      <ul className='flex'>
        { insideHeader &&   <li  className='px-10'><input onChange={(e)=>dispatch(searchProducts(e.target.value))} type="text" placeholder='Search your items' className='border  rounded light p-1' /></li>}
        <li className='px-10'><Link to={'/wishlist'}> <i class="fa-regular fa-heart text-red-500 "></i> Whishlist <span className='p-1 ms-1 bg-zinc-600 rounded-full ms-1 '>{userWishlist?.length}</span> </Link></li>
        <li className='px-5'><Link  to={'/cart'}> <i class="fa-solid fa-cable-car text-green-500 me-1"></i> Cart <span className='p-1 ms-1 bg-zinc-600 rounded-full ms-1 '>{userCart?.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header