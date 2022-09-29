import React from 'react';
import Profile from '../Profile/Profile';
import Items from '../Workout-Items/Items';
import './Container.css';
const Container = () => {
    return (
        <div className='whole-body'>
            <Items></Items>
            <div className="personalize">
                {/* profile */}
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Container;