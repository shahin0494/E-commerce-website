import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function View() {

  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

  const { id } = useParams()

  const [product, setProduct] = useState([])

  useEffect(() => {
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts.find(item => item.id == id))
  }, [])
  // console.log(product);

  const handleAddToWishlist = ()=>{
    // check product is in store wishlist
    const existingProduct = userWishlist?.find(item=>item.id==product.id)
    if (existingProduct) {
      alert("Product already exists in your wishlist")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product updated successfully")
    }
  }

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 p-5">
        {/* Product Image & Buttons */}
        <div className="flex flex-col justify-center items-center mt-5">
          <img
            style={{ height: '200px' }}
            src={product?.thumbnail}
            alt="product"
            className="mb-10"
          />
          <div className="flex gap-4 my-4">
            <button onClick={handleAddToWishlist} className="py-1 px-4 bg-blue-500 text-white font-medium rounded">
              ADD TO Wishlist
            </button>
            <button onClick={handleCart} className="py-1 px-4 bg-green-500 text-white font-medium rounded">
              ADD TO Cart
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="py-13 mt-5">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <h2 className="text-2xl text-red-500 font-bold">${product?.price}</h2>
          <h3 className="text-xl mt-3">
            <span className="font-bold">Brand</span> : {product?.brand}
          </h3>
          <h3 className="text-xl mt-3">
            <span className="font-bold">Category</span> : {product?.category}
          </h3>
          <h3 className="text-xl mt-3">
            <span className="font-bold">Description</span> : {product?.description}
          </h3>
          <h3 className="text-xl font-bold my-5">Client Review</h3>
          {/* review tab duplicated */}
          {
            product?.reviews?.length > 0 ?
            product?.reviews?.map(item => (
              <div className="rounded shadow my-3 p-2">
                <p>
                  <span className="font-bold text-black">{item?.reviewerName}</span> : {item?.comment}!</p>
                <p>
                  Rating : {item?.rating} <i className="fa-solid fa-star text-yellow-400"></i>
                </p>
              </div>
            ))
              :
                <p>No reviews yet</p>
          }
        </div>
      </div>
    </>
  );
}

export default View;