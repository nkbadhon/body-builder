import React from 'react';
import Items from '../Workout-Items/Items';
import './Container.css';
const Container = () => {
    return (
        <div className='whole-body'>
            <Items></Items>

            <div className="personalize">
                <h3>Profile</h3>
            </div>
        </div>
    );
};

export default Container;