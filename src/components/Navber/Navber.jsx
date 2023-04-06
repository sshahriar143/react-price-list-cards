import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'


const Navber = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', url: '/home' },
        { id: 2, name: 'Contact', url: '/contact' },
        { id: 3, name: 'About', url: '/about' },
        { id: 4, name: 'Services', url: '/services' },
        { id: 5, name: 'Blog', url: '/blog' }
      ];
      
    return (
        <nav className=' bg-purple-500 px-4'>
             <div onClick={() =>setOpen(!open)}>
                <span>{open === true ?  
                <XMarkIcon className="h-6 w-6 text-cyan-50" /> :<Bars3Icon className="h-6 w-6 text-cyan-50" />}</span>
             
            
             </div>
            <ul className={`md:flex absolute duration-500 md:static bg-purple-500 pl-8 py-2 ${open ? 'top-6' : '-top-36'}`}>
            {
                routes.map(route => <Link 
                    key={route.id}
                    route={route}
                ></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navber;