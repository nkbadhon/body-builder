import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Single from '../SingleItems/Single';
import './items.css';


const Items = () => {
    const [acc, setAcc] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const btnAddToList = (product) => {
        const newAcc = [...acc, product];
        setAcc(newAcc);
    }
    // console.log(newTime)
    return (
        <div className='gym-items'>
            <div className="Prof-body">
                <div className="cart-container">
                    {
                        products.map(product => <Single
                            key={product.id}
                            product={product}
                            btnAddToList={btnAddToList}

                        ></Single>)
                    }
                </div>
                <Profile acc={acc}></Profile>
            </div>

        </div>
    );
};

export default Items;