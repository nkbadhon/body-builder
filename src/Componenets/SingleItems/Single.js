import React from 'react';
import './Single.css'

const Single = (props) => {
    const { id, name, time, img, age } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <h2>{name}</h2>
                <p>Time: {time}s</p>
                <p>Expected Age: {age}</p>
            </div>
            <button className='Button' onClick={() => props.btnAddToList(props.product)}>Add to List</button>

        </div>
    );
};

export default Single;