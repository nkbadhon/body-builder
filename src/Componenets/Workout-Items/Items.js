import React, { useEffect, useState } from 'react';
import './items.css';
const Items = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="gym-items">
            <h2 className='header'>BodyBuilder.com</h2>
            <h4 className='selection'>Select Your Desire Excersize: {products.length}</h4>

        </div>
    );
};

export default Items;