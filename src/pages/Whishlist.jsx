import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Whishlist() {

  const userCart = useSelector(state => state.cartReducer)
  const ourWishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()


  const handleCart = (product) => {
    dispatch(removeWishlistItem(product?.id))
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item => item.id == product.id)
    if (existingProduct) {
      alert("Product updated successfully")
    }
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='mx-5 mb-25'>
        <div className="grid grid-cols-4 gap-4">
          {
            ourWishlist?.length > 0 ?
              ourWishlist.map(product => (
                <div key={product?.id} className='rounded p-2 shadow'>
                  {/* image */}
                  <img height={'200px'} src={product?.thumbnail} alt="product" />
                  <div className='text-center'>
                    {/* title */}
                    <h3 className='text-xl'>{product?.title}</h3>
                    {/* link */}
                    <div className='justify-between mt-3 px-5 flex'>
                      {/* delete button */}
                      <button onClick={() => dispatch(removeWishlistItem(product?.id))}> <i class="fa-solid fa-heart-circle-xmark text-red-500"></i> </button>
                      {/* add to cart button */}
                      <button onClick={() => dispatch(handleCart(product))}><i class="fa-solid fa-cart-plus text-green-500"></i> </button>
                    </div>
                  </div>
                </div>)) :
              <p className='text-center my-10 font-bold'>"Wishlist is empty"</p>
          }
        </div>
      </div>

    </>
  )
}

export default Whishlist