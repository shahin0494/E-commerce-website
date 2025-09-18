import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'


function Home() {

  const dispatch = useDispatch()

  const { loading, error, allProducts } = useSelector((state) => state.productReducer)
  // console.log(loading, error, allProducts);

  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / productsPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const currentPageProductsLastIndex = currentPage * productsPerPage
  const currentPageProductsFirstIndex = currentPageProductsLastIndex - productsPerPage
  const visibleProductsCards = allProducts?.slice(currentPageProductsFirstIndex, currentPageProductsLastIndex)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const navigatePrewPage = ()=>{
    if (currentPage!=1) {
      setCurrentPage(currentPage-1)
    }
  }

  const navigateNextPage= ()=>{
    if (currentPage!=totalPages) {
      setCurrentPage(currentPage+1)
    }
  }

  return (
    <>
      <Header insideHeader={true} />
      <div className='pt-17 pb-5 mx-5 '>
        <div className="grid grid-cols-4 gap-4">

          {
            loading ?
              <p>loading</p>
              :
              allProducts?.length > 0 ?
                visibleProductsCards?.map((product) => (
                  <div key={product.id} className="rounded p-2 shadow">
                    {/* image */}
                    <img height={'200px'} src={product.thumbnail} />
                    <div className='text-center'>
                      {/* title */}
                      <h3 className='font-bold text-xl'>{product.title}</h3>
                      {/* link */}
                      <Link to={`/${product.id}/view`} className='bg-violet-800 text-white p-1 rounded inline-block mt-3' > View More... </Link>
                    </div>
                  </div>
                ))
                :
                <p>Products Are Not Avilable</p>
          }
        </div>

      </div>
      {/* pagination */}
      <div className="text-center text-2xl my-25">
          <button onClick={navigatePrewPage} className='cursor-pointer me-3'><i class="fa-solid text-violet-800 text-3xl fa-square-caret-left"></i></button>
          <span >{currentPage} of {totalPages}</span>
          <button  onClick={navigateNextPage} className='cursor-pointer ms-3'><i class="fa-solid text-violet-800 text-3xl fa-square-caret-right"></i></button>
      </div>
    </>
  )
}

export default Home