import { useProductStore } from '../store/product';
import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';


Modal.setAppElement('#root');


function ItemCard({ product }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { deleteProduct, updateProduct } = useProductStore();
    const navigate = useNavigate();
    const [ updatedProduct, setUpdatedProduct ] = useState(product);
    
    const notify = (msg) => toast(msg);

    const handleDeleteProduct = async (id) => {
        const { success, message } = await deleteProduct(id);
        if (!success) notify(message);
        else notify("Product deleted successfully");
    }

    const handleUpdateProduct = async (id, updatedProduct) => {
        const { success, message } = await updateProduct(id, updatedProduct);
        if (!success) notify(message);
        else notify("Product updated successfully.");
        setModalIsOpen(false);
    }
    
    
    
    
    return (
        <>
        <Toaster />
            <div className="p-2 h-full w-full hover:transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="card flex flex-col justify-center rounded-lg bg-secondary dark:bg-white shadow-lg hover:shadow-2xl transition duration-200 ease-in-out">
                    <div style={{ backgroundImage: `url(${product.image})` }}
                        className="prod-img w-full h-[320px] bg-fill bg-no-repeat bg-center rounded-xl">
                    </div>
                    <div className="prod-title mx-4 mt-2">
                        <p className="text-xl text-light-gray dark:text-primary font-bold mb-4">
                            {product.name}
                        </p>
                    </div>
                    <div className="prod-info mt-0">
                        <div className="flex flex-col mx-4 md:flex-row justify-between items-center text-gray-900">
                            <p className="text-sm text-gray dark:text-gray-dark overflow-hidden text-ellipsis whitespace-nowrap">
                                {/* {description} */}
                                Mens Shoes
                            </p>
                            <p className="text-sm text-gray dark:text-gray-dark font-bold">
                                ${product.price}
                            </p>
                        </div>
                        <div className="m-4 flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <button
                                className="bg-primary h-12 border-none px-6 py-2 transition ease-in duration-200 rounded-lg hover:bg-gray-800 border-2 focus:outline-none hover:bg-blue hover:text-primary max-md:w-full"
                                onClick={() => { setModalIsOpen(true) }}>
                                Update
                            </button>
                            <button
                                className="bg-primary h-12 border-none px-6 py-2 transition ease-in duration-200 rounded-lg border-2 focus:outline-none hover:bg-accent hover:text-primary max-md:w-full max-md:mt-2 text-red"
                                onClick={() => { handleDeleteProduct(product._id) }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className="bg-secondary dark:bg-white p-6 rounded-lg shadow-lg w-[30%] max-xl:w-[70%] mx-auto justify-center items-center text-center space-y-2" 
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
                <div className="mb-4">
                    <p className="text-accent font-black text-2xl text-center">Update Item</p>
                    <h2 className="text-md font-normal text-sm dark:text-gray text-light-gray">Enter information below</h2>
                </div>
                <div>
                    <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                        type="text"
                        placeholder="Shoes Name"
                        value={updatedProduct.name}
                        onChange={(e) => { setUpdatedProduct({ ...updatedProduct, name: e.target.value }) }} />
                </div>
                <div>
                    <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                        type="text"
                        placeholder="Description"
                        value={updatedProduct.description}
                        onChange={(e) => { setUpdatedProduct({ ...updatedProduct, description: e.target.value }) }} />
                </div>
                <div>
                    <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                        type="text"
                        placeholder="Price"
                        value={updatedProduct.price}
                        onChange={(e) => { setUpdatedProduct({ ...updatedProduct, price: e.target.value }) }} />
                </div>
                <div>
                    <input className="w-full p-4 text-md dark:bg-[#f3f3f3] focus:outline-none rounded-lg text-gray-light bg-primary dark:text-primary dark:border-[1px] border-gray-light focus:border-primary"
                        type="text"
                        href="/home"
                        placeholder="Image URL"
                        value={updatedProduct.image}
                        onChange={(e) => { setUpdatedProduct({ ...updatedProduct, image: e.target.value }) }} />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <button className="w-full py-4 rounded text-sm font-bold transition duration-200 border-[1px] bg-accent dark:bg-accent hover:bg-primary dark:hover:bg-secondary"
                        onClick={() => {handleUpdateProduct(product._id, updatedProduct)}}>
                        Update Product
                    </button>
                    <button className="w-full py-4 rounded text-sm font-bold transition duration-200 border-[1px] bg-gray dark:bg-primary hover:bg-primary dark:hover:bg-gray dark:text-gray-light"
                        onClick={() => {setModalIsOpen(false)}}>
                        Cancel
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default ItemCard