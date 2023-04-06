import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useEffect, useState } from 'react';
const Phonebar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res =>res.json())
        // .then(data => setPhones(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadData = data.data.data
                const phonesData = loadData.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                console.log(phonesData);
                setPhones(phonesData)
            })


    }, [])
    return (
        <div>
            <BarChart width={730} height={250} data={phones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phonebar;