import React from 'react';
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
                <div style={{ marginLeft: 10 }}>
                    <h4 style={{ marginBottom: 0 }}>5.5'</h4>
                    <p style={{ opacity: .5, marginTop: 0 }}>Height</p>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <h4 style={{ marginBottom: 0 }}>25yrs</h4>
                    <p style={{ opacity: .5, marginTop: 0 }}>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;