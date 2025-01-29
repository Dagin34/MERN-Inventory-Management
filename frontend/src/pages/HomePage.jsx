import React, { useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import AirMax80 from '../assets/images/AirMax80.jpg'
import NikeLowDunk from '../assets/images/Nike Low Dunks.jpeg'
import { useProductStore } from '../store/product'
// import { useProductStore } from '../store/product'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  console.log("Products", products);

  // const products = [
  //   {
  //     "name": "Air Max 90",
  //     "description": "Classic Nike Air Max 90 with a timeless design.",
  //     "price": 120,
  //     "image": AirMax80
  //   },
  //   {
  //     "name": "Nike Dunk Low",
  //     "description": "Classic Nike Dunk Low with a timeless design.",
  //     "price": 240,
  //     "image": NikeLowDunk
  //   }
  // ]

  const isEmpty = false;

  return (
    <>
      <div className='px-4 w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {products.length === 0 ? (
          <div className="flex mx-auto justify-center text-center my-4 text-gray" >
            <p className="text-gray-500 text-lg ">No Products Found.</p>
            <a href='/create' className="font-bold text-lg ml-2 underline text-bold text-accent hover:text-blue">Create a Product?</a>
          </div>
        ) : (
          products.map((product) => (
            <ItemCard
              key={product.name}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))

        )}
      </div >
    </>
  )
}

export default HomePage