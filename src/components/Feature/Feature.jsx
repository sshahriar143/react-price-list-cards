import React from 'react';
import { CheckCircleIcon   } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
             <CheckCircleIcon  class="h-6 w-6" />
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;