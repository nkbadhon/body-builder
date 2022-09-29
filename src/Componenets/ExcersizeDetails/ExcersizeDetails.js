import React from 'react';
import './ExcersizeDetails.css'

const ExcersizeDetails = () => {
    return (
        <div style={{ paddingBottom: 40 }}>
            <h4>Exercise Details</h4>
            <div className='extime'>
                <h5>Exercise Time</h5>
            </div>
            <div className='extime'>
                <h5>Break Time</h5>
            </div>
            <button className='TaskDoneButton'>Task Done</button>

        </div>
    );
};

export default ExcersizeDetails;