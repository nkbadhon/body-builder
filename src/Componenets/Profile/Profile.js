import React from 'react';
import ExcersizeDetails from '../ExcersizeDetails/ExcersizeDetails';
import './Profile.css'

const Profile = () => {

    return (
        <div className='FullProfileBody'>
            <div className='JustPictureAndInfo'>
                <div className="image">
                    <img src="Profile.jpg" alt="" />
                    <div className='ProfileInfo'>
                        <h4 style={{ marginBottom: 0 }}>Nk Badhon</h4>
                        <h5 style={{ marginTop: 0, opacity: .6 }}><small>From: Tangail, Dhaka.</small></h5>
                    </div>
                </div>

            </div>
            <div className="otherInfo">
                <div>
                    <h4 style={{ marginBottom: 0 }}>75kg</h4>
                    <p style={{ opacity: .5, marginTop: 0 }}>Weight</p>
                </div>
                <div style={{ marginLeft: 15 }}>
                    <h4 style={{ marginBottom: 0 }}>5.5'</h4>
                    <p style={{ opacity: .5, marginTop: 0 }}>Height</p>
                </div>
                <div style={{ marginLeft: 15 }}>
                    <h4 style={{ marginBottom: 0 }}>25yrs</h4>
                    <p style={{ opacity: .5, marginTop: 0 }}>Age</p>
                </div>
            </div>
            <div className="break">
                <h4>Add a Break</h4>
                <div className="breakTime">
                    <p className='time'>10s</p>
                    <p className='time'>20s</p>
                    <p className='time'>30s</p>
                    <p className='time'>40s</p>
                </div>
            </div>
            <ExcersizeDetails></ExcersizeDetails>
        </div>
    );
};

export default Profile;