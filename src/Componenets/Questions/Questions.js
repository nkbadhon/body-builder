import React from 'react';

const Questions = () => {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <h3>How does react works?</h3>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.</p>
            <h3>What is the difference between props and state?</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>
            <h3>What is useEffect's work except data loading?</h3>
            <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
        </div>
    );
};

export default Questions;