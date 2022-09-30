import React, { useEffect, useState } from 'react';
import './Profile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = (props) => {
    const { acc } = props;
    const notify = () => toast("Congratulations!", { position: "top-center" });
    const [off, setOff] = useState([]);
    const click = (a) => {
        // Store and show data from local storage

        let breaktimestorage = {};

        const quantity = breaktimestorage[a.target.innerText];
        if (quantity) {

            const newQuantity = parseInt(quantity) + 1;
            breaktimestorage[a.target.innerText] = newQuantity;
        }
        else {
            breaktimestorage[a.target.innerText] = 1;

        }

        for (const sec in breaktimestorage) {
            console.log(sec)
        }

        localStorage.setItem("Break-time", JSON.stringify(breaktimestorage))
        const newA = [a.target.innerText];
        setOff(newA);
    }
    let total = 0;
    for (const role of acc) {
        total = total + role.timereq;
        // console.log(total);
    }
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
                {/* all break times here */}
                <div className="breakTime">
                    <button onClick={(a) => click(a)} className="time"><span>10</span>s</button>
                    <button onClick={(a) => click(a)} className="time"><span>20</span>s</button>
                    <button onClick={(a) => click(a)} className="time"><span>30</span>s</button>
                    <button onClick={(a) => click(a)} className="time"><span>40</span>s</button>
                    <button onClick={(a) => click(a)} className="time"><span>50</span>s</button>

                </div>
            </div>
            <div style={{ paddingBottom: 40 }}>
                <h4>Exercise Details</h4>
                <div className='extime'>
                    <h5>Exercise Time</h5>
                    <p>{total} seconds</p>
                </div>
                <div className='extime'>
                    <h5>Break Time</h5>
                    <p>{off} Seconds</p>
                </div>
                <button className='TaskDoneButton' onClick={notify}>Task Done</button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Profile;