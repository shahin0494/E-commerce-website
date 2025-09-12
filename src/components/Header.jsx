import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex justify-between p-5 text-2xl w-full bg-slate-800 text-white fixed w-full '>
      <Link to={'/'}> <i class="fa-solid fa-truck-ramp-box me-1"></i>  Cartico</Link>
      <ul className='flex'>
        <li className='px-10'><Link to={'/wishlist'}> <i class="fa-regular fa-heart text-red-500 "></i> Whishlist <span className='p-1 ms-1 bg-zinc-600 rounded-full ms-1 '>{userWishlist?.length}</span> </Link></li>
        <li className='px-5'><Link  to={'/cart'}> <i class="fa-solid fa-cable-car text-green-500 me-1"></i> Cart <span className='p-1 ms-1 bg-zinc-600 rounded-full ms-1 '>20</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header