import React from 'react';
import './Spinner.css';

const Spinner = () => (
   <div className="centered"> 
   Image App is loading<br/>
   from Heroku & Firebase!
    <div className="loader">
        Loading...
    </div>
    </div>
);

export default Spinner;