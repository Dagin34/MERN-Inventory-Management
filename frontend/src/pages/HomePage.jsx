import ItemCard from '../components/ui/ItemCard'
import React from 'react'
import AirMax80 from '../assets/images/AirMax80.jpg'
import NikeLowDunk from '../assets/images/Nike Low Dunks.jpeg'
// import { useProductStore } from '../store/product'

const HomePage = () => {
  // const products = useProductStore();

  const products = [
    {
      "name": "Air Max 90",
      "description": "Classic Nike Air Max 90 with a timeless design.",
      "price": 120,
      "image": AirMax80
    },
    {
      "name": "Nike Dunk Low",
      "description": "Classic Nike Dunk Low with a timeless design.",
      "price": 240,
      "image": NikeLowDunk
    }
  ]
  return (
    <>
      {/* <div className="flex justify-center items-center my-4 text-gray">
        <p className="text-gray-500 text-lg">No Products Found.</p>
        <a href='/create' className="font-bold text-lg ml-2 underline text-bold text-accent hover:text-blue">Create a Product?</a>
      </div> */}
      <div className='w-screen h-screen flex justify-start flex-wrap max-2xl:justify-around max-md:px-0 mx-0'>
        {products.length === 0 ? (
          <div className="flex justify-center my-4 text-gray" >
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


        {/* <ItemCard
          name="Air Max 90"
          description="Classic Nike Air Max 90 with a timeless design."
          price={120}
          image={AirMax80}
        />
        <ItemCard
          name="Nike Dunk Low"
          description="Classic Nike Dunk Low with a timeless design."
          price={240}
          image={NikeLowDunk}
        /> */}
      </div >
    </>
  )
}

export default HomePage