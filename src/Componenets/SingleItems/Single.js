import React from 'react';
import './Single.css'

const Single = (props) => {
    const { id, name, time, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h4>Id: {id}</h4>
        </div>
    );
};

export default Single;