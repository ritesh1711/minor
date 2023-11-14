import React from 'react'

export default function footer() {
    return (
        <div>
            <footer className='bg-blue-700 h-50 text-white py-4 bottom-0 w-full'>
                <div className="container mx-auto ml-3.5 pb-10">
                    <span className='underline font-bold text-2xl text-left'> PRODUCT CATEGORIES </span>
                    <div className='text-2xl hover:text-cyan-300'> Smartphones  </div>
                    <div className='text-2xl hover:text-cyan-300'> Televisions </div>
                    <div className='text-2xl hover:text-cyan-300'> AirConditioners </div>
                    <div className='text-2xl hover:text-cyan-300'> Refregirators </div>
                    <div className='text-2xl hover:text-cyan-300'> Laptops </div>
                </div>
                <div>

                </div>
            </footer>
            <footer className='bg-red-900 h-50 text-white py-2 bottom-0 w-full'>
                <div className="container mx-auto text-center">
                    <div className='underline'> Disclaimer</div>
                    <p> Product prices, offers and availability are subject to change from time to time.
                        All prices are inclusive of taxes.
                        Product colours & images are only for illustration and they may not exactly match with the actual product </p>
                    <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
