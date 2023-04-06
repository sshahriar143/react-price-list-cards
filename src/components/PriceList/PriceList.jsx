import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div className='mt-12'>
           <h2 className=' text-5xl font-bold text-center p-5 bg-purple-400 mt-10 text-purple-950'>Afforable price lists </h2> 
           <div className='grid md:grid-cols-3 gap-3 '>
            {
                prices.map(price => <PriceCard 
                key={price.id}
                price ={price}
                ></PriceCard>)
            }
           </div>
        </div>
        
    );
};

export default PriceList;