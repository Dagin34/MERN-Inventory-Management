import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../index.css'
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const { createProduct } = useProductStore();


  // const handleAddProduct = async () => {
  //   const { success, message } = await createProduct(newProduct);
  //   console.log(success, message);
  //   if (success) {
  //     alert(message);
  //     setNewProduct({
  //       name: '',
  //       description: '',
  //       price: '',
  //       image: ''
  //     });
  //   }

  const [error, setError] = useState('');

  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log(success, message);
    if (success) {
      showError(message);
      //.. reset the state
      setNewProduct({
        name: '',
        description: '',
        price: '',
        image: ''
      });
      
    } else {
      showError(message);
    }
  };

  {
    error && (
      <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center p-4">
        {error}
      </div>
    )
  }

  // const location = useLocation();
  // const { name, description, price, image } = location.state || {};
  // console.log(name, description, price, image);
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
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                type="text"
                placeholder="Shoes Name"
                defaultValue={newProduct.name}
                onChange={(e) => { setNewProduct({ ...newProduct, name: e.target.value }) }} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                type="text"
                placeholder="Description"
                defaultValue={newProduct.description}
                onChange={(e) => { setNewProduct({ ...newProduct, description: e.target.value }) }} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                type="text"
                placeholder="Price"
                defaultValue={newProduct.price}
                onChange={(e) => { setNewProduct({ ...newProduct, price: e.target.value }) }} />
            </div>
            <div>
              <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                type="text"
                href="/home"
                placeholder="Image URL"
                defaultValue={newProduct.image}
                onChange={(e) => { setNewProduct({ ...newProduct, image: e.target.value }) }} />
            </div>
            <div>
              <button className="w-full py-4 rounded text-sm font-bold transition duration-200 border-[1px] border-accent bg-accent dark:bg-accent hover:bg-primary dark:hover:bg-secondary"
                onClick={handleAddProduct}>
                Add Product
              </button>
              <avatar />
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default CreatePage