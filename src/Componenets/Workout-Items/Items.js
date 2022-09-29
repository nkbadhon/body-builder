import React, { useEffect, useState } from 'react';
import Single from '../SingleItems/Single';
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
            <h4 className='selection'>Select Your Desire Excersize</h4>
            <div className="show">
                {
                    products.map(product => <Single
                        key={product.id}
                        product={product}
                    ></Single>)
                }
            </div>


        </div>
    );
};

export default Items;