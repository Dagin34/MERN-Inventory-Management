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
            <div className="min-w-sm max-w-[650px] md:max-w-sm p-6 h-auto">
                <div className="card flex flex-col justify-center p-6 rounded-lg shadow-2xl bg-secondary dark:bg-white">
                    <div className="prod-title">
                        <p className="text-2xl text-light-gray dark:text-primary font-bold mb-8">
                            {name}
                        </p>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${image})` }}
                        className="prod-img w-full h-[200px] bg-cover bg-center rounded-xl"
                    >
                    </div>
                    <div className="prod-info mt-4 max-sm:mt-2">
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <p className="text-sm text-gray">
                                {description}
                            </p>
                            <p className="text-sm text-gray">
                                ${price}
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <button
                                className="bg-primary h-12 border-none px-6 mt-4 py-2 transition ease-in duration-200 rounded-lg hover:bg-gray-800 border-2 focus:outline-none hover:bg-blue hover:text-primary max-md:w-full"
                                onClick={() => { sendToUpdate(name, description, price, image) }}>
                                Update
                            </button>
                            <button
                                className="bg-primary h-12 border-none px-6 mt-4 py-2 transition ease-in duration-200 rounded-lg border-2 focus:outline-none hover:bg-accent hover:text-primary max-md:w-full max-md:mt-2 text-red">
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