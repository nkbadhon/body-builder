import React from 'react';
import ExcersizeDetails from '../ExcersizeDetails/ExcersizeDetails';
import './Single.css'


const Single = (props) => {
    const { btnAddToList, time } = props;
    const { name, timereq, img, age } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <h2>{name}</h2>
                <p>Time: {timereq}s</p>
                <p>Expected Age: {age}</p>
            </div>
            <button className='Button' onClick={() => btnAddToList(props.product)}>Add to List</button>

        </div>
    );
};

export default Single;