import React from 'react'
import { useNavigate } from 'react-router-dom';


function ItemCard({ name, description, price, image }) {
    const navigate = useNavigate();

    const sendToUpdate = (name, description, price, image) => {
        console.log(name, description, price, image);
        navigate('/create', { state: { name, description, price, image } });
    }


    return (
        <>
            <div className="p-2 h-full w-full">
                <div className="card flex flex-col justify-center rounded-lg shadow-2xl bg-secondary dark:bg-white">
                    <div style={{ backgroundImage: `url(${image})` }}
                        className="prod-img w-full h-[320px] bg-cover bg-center rounded-xl">
                    </div>
                    <div className="prod-title mx-4 mt-2">
                        <p className="text-2xl text-light-gray dark:text-primary font-bold mb-4">
                            {name}
                        </p>
                    </div>
                    <div className="prod-info mt-0">
                        <div className="flex flex-col mx-4 md:flex-row justify-between items-center text-gray-900">
                            <p className="text-sm text-gray overflow-hidden text-ellipsis whitespace-nowrap">
                                {/* {description} */}
                                Mens Shoes
                            </p>
                            <p className="text-sm text-gray">
                                ${price}
                            </p>
                        </div>
                        <div className="m-4 flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <button
                                className="bg-primary h-12 border-none px-6 py-2 transition ease-in duration-200 rounded-lg hover:bg-gray-800 border-2 focus:outline-none hover:bg-blue hover:text-primary max-md:w-full"
                                onClick={() => { sendToUpdate(name, description, price, image) }}>
                                Update
                            </button>
                            <button
                                className="bg-primary h-12 border-none px-6 py-2 transition ease-in duration-200 rounded-lg border-2 focus:outline-none hover:bg-accent hover:text-primary max-md:w-full max-md:mt-2 text-red">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard