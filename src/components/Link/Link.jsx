import React from 'react';

const Link = ({route}) => {
    return (
        <li className=' mr-12 hover:bg-purple-600'>
          <a href="">{route.name}</a>  
        </li>
    );
};

export default Link;