import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Questions from '../Questions/Questions';
import Items from '../Workout-Items/Items';
import './Container.css';
const Container = () => {
    return (
        <div className='whole-body'>
            <Header></Header>
            <Items></Items>
            <Questions></Questions>
        </div>
    );
};

export default Container;