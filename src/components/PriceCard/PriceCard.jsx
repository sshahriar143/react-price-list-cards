import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-500 mt-4 rounded-md p-4 flex flex-col '>
            <h2 className='text-center'>
                <span  className=' text-3xl text-purple-900 font-extrabold'>{price.price}</span>
                <span className='text-slate-200 font-semibold'>/month</span>
            </h2>
           <h5 className='text-center  my-6 text-2xl font-bold'>{price.name}</h5>
           <p className='underline font-semibold text-yellow-50'>Features:</p>
           {
            price.features.map((feature, idx )=> <Feature 
                key ={idx}
                feature = {feature}
            ></Feature>)
           }
           <button className='w-full text-white bg-violet-500 py-2 font-bold rounded-md  mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;