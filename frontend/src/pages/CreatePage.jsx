import React, { useState } from 'react'
import '../index.css'

const CreatePage = ({ name: initialName, description: initialDescription, price: initialPrice, image: initialImage }) => {
  const [name, setName] = useState(initialName || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [price, setPrice] = useState(initialPrice || "");
  const [image, setImage] = useState(initialImage || "");

  console.log(name, description, price, image);

  return (
    <>
      <div className='w-screen h-full text-center'>
        <section className="flex justify-center items-start h-screen bg-gray-100">
          <div className="max-w-md w-full mt-12 bg-white dark:bg-secondary rounded-xl p-6 space-y-4">
            <div className="mb-4">
              <p className="text-accent font-black text-2xl text-center">Update Item</p>
              <h2 className="text-md font-normal text-sm dark:text-light-gray text-secondary">Enter information below</h2>
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-primary focus:outline-none rounded-lg text-secondary" type="text" placeholder="Shoes Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-primary focus:outline-none rounded-lg" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-primary focus:outline-none rounded-lg" type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-primary focus:outline-none rounded-lg" type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div>
              <button className="w-full py-4 rounded text-sm font-bold transition duration-200 border-[1px] border-accent hover:bg-accent">Update</button>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default CreatePage