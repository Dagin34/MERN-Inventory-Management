import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../index.css'

const CreatePage = () => {

  const location = useLocation();
  const { name, description, price, image } = location.state || {};

  console.log(name, description, price, image);
  // console.log(itemName, itemDescription, itemPrice, itemImage);


  return (
    <>
      <div className='w-screen h-full text-center'>
        <section className="flex justify-center items-start h-screen bg-gray-100">
          <div className="max-w-md w-full mt-12 dark:bg-white bg-secondary rounded-xl p-6 space-y-4 shadow-2xl ">
            <div className="mb-4">
              <p className="text-accent font-black text-2xl text-center">Update Item</p>
              <h2 className="text-md font-normal text-sm dark:text-gray text-light-gray">Enter information below</h2>
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary" type="text" placeholder="Shoes Name" defaultValue={name} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary" type="text" placeholder="Description" defaultValue={description} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary" type="text" placeholder="Price" defaultValue={price} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary" type="text" placeholder="Image URL" defaultValue={image} />
            </div>
            <div>
              <button className="w-full py-4 rounded text-sm font-bold transition duration-200 border-[1px] border-accent bg-accent dark:bg-accent hover:bg-primary dark:hover:bg-secondary" onClick={updateButton}>
                Update
              </button>
            </div>

          </div>
        </section>
      </div>
    </>
  )

  function updateButton() {
    console.log('Update button clicked');
    console.log(name, description, price, image);
  }
}

export default CreatePage