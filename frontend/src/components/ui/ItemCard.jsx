import React from 'react'
import NikeLowDunks from '../../assets/images/Nike Low Dunks.jpeg'

function ItemCard() {
    return (
        <>
            <div class="min-w-sm max-w-[650px] md:max-w-sm p-6">
                <div class="card flex flex-col justify-center p-6 rounded-lg shadow-2xl bg-secondary dark:bg-white">
                    <div class="prod-title">
                        <p class="text-2xl text-light-gray dark:text-primary font-bold mb-8">
                            Nike Low Dunks
                        </p>
                    </div>
                    <div class="prod-img">
                        <img src={NikeLowDunks} alt="nike low dunks"
                            class="w-full object-cover object-center rounded-xl" />
                    </div>
                    <div class="prod-info mt-4 max-sm:mt-2">
                        <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <p class="text-sm text-gray">
                                Outdoors Low Cut Dunks
                            </p>
                            <p class="text-sm text-gray">
                                $200
                            </p>
                        </div>
                        <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                            <button
                                class="bg-primary h-12 border-none px-6 mt-4 py-2 transition ease-in duration-200 rounded-lg hover:bg-gray-800 border-2 focus:outline-none hover:bg-blue hover:text-primary max-md:w-full">
                                    Update
                            </button>
                            <button
                                class="bg-primary h-12 border-none px-6 mt-4 py-2 transition ease-in duration-200 rounded-lg border-2 focus:outline-none hover:bg-accent hover:text-primary max-md:w-full max-md:mt-2 text-red">
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