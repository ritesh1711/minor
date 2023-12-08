import React from 'react';


export default function Footer() {
    return (
        <div>
            <div className='flex flex-col md:flex-row bg-black opacity-90 text-white py-4 md:py-2 w-full sticky bottom-0 '>
                <div className='mb-4 md:mb-0 md:mr-8'>
                    <span className='underline font-bold text-2xl text-red-600 text-left'> PRODUCT CATEGORIES </span>
                    <div className='text-2xl hover:text-cyan-300'> Smartphones  </div>
                    <div className='text-2xl hover:text-cyan-300'> Televisions </div>
                    <div className='text-2xl hover:text-cyan-300'> AirConditioners </div>
                    <div className='text-2xl hover:text-cyan-300'> Refrigerators </div>
                    <div className='text-2xl hover:text-cyan-300'> Laptops </div>
                </div>

                <div className='mb-4 md:mb-0 md:mr-8'>
                    <span className='underline font-bold text-2xl text-red-600 text-left md:pl-8'> CONNECT WITH US </span>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'> Facebook</div>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'> Twitter</div>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'> Instagram</div>
                </div>

                <div>
                    <span className='underline font-bold text-2xl text-red-600 text-left md:pl-8'> POLICIES </span>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'>Terms of Use</div>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'>FAQs</div>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'>Cancellation and Return Policy</div>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'>Privacy Policy</div>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'>Pricing and Payments</div>
                    <div className='text-2xl hover:text-cyan-300 md:pl-8'>Shipping and Delivery Policy</div>
                </div>
            </div>

            <footer className='bg-black text-white py-2 w-full'>
                <div className="container mx-auto text-center">
                    <div className='underline'> Disclaimer </div>
                    <p> Product prices, offers and availability are subject to change from time to time.
                        All prices are inclusive of taxes.
                        Product colors & images are only for illustration and they may not exactly match with the actual product </p>
                    <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}