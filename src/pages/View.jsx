import React from 'react';
import Header from '../components/Header';

function View() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4 p-5">
        {/* Product Image & Buttons */}
        <div className="flex flex-col justify-center items-center mt-5">
          <img
            style={{ height: '200px' }}
            src="https://crepdogcrew.com/cdn/shop/files/Travis_scott_low_og_olive_white_bg_2x_49cc2a7e-f9e0-4240-ba2d-58794a26fbdf.jpg?v=1755096850&width=3000"
            alt="product"
            className="mb-10"
          />
          <div className="flex gap-4 my-4">
            <button className="py-1 px-4 bg-blue-500 text-white font-medium rounded">
              ADD TO Wishlist
            </button>
            <button className="py-1 px-4 bg-green-500 text-white font-medium rounded">
              ADD TO Cart
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="py-13 mt-5">
          <h1 className="text-3xl font-bold">iphone Air</h1>
          <h2 className="text-2xl text-red-500 font-bold">$1445 USD</h2>
          <h3 className="text-xl mt-3">
            <span className="font-bold">Brand</span> : iphone
          </h3>
          <h3 className="text-xl mt-3">
            <span className="font-bold">Category</span> : Air
          </h3>
          <h3 className="text-xl mt-3">
            <span className="font-bold">Description</span> : The iPhone Air is designed to combine premium performance with sleek portability. It focuses on being ultra-lightweight, slim, and stylish while still delivering the power iPhone users expect.
          </h3>
          <h3 className="text-xl font-bold my-5">Client Review</h3>
          <div className="rounded shadow my-3 p-2">
            <p>
              <span className="font-bold">Client-Name</span> : Message
            </p>
            <p>
              Rating : 4.5 <i className="fa-solid fa-star text-yellow-400"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;