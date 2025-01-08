import ItemCard from '../components/ui/ItemCard'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center my-4 text-gray hidden">
        <p className="text-gray-500 text-lg">No Products Found.</p>
        <a href="/create" className="font-bold text-lg ml-2 underline text-bold text-accent hover:text-blue">Create a Product?</a>
      </div>
      <div className='w-screen h-full flex justify-start flex-wrap max-2xl:justify-around max-md:px-0 mx-0'>

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </>
  )
}

export default HomePage