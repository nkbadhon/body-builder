import React, { useEffect, useState } from 'react';
import Single from '../SingleItems/Single';
import './items.css';
const Items = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const btnAddToList = (product) => {
        console.log(product)
    }
    return (
        <div className="gym-items">
            <h2 className='header'>BodyBuilder.com</h2>
            <h4 className='selection'>Select Your Desire Exercise</h4>
            <div className="show">
                {
                    products.map(product => <Single
                        key={product.id}
                        product={product}
                        btnAddToList={btnAddToList}
                    ></Single>)

                }
            </div>
            <div className="qna">
                <h1>Frequently Asked Questions</h1>
                <h3>How does react works?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.</p>
                <h3>What is the difference between props and state?</h3>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
                <h3>What is useEffect's work except data loading?</h3>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </div>


        </div>
    );
};

export default Items;