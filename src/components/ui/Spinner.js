import React from 'react';
import './Spinner.css';

const Spinner = () => (
   <div className="centered"> 
   Your awesome images are loading<br/>
   from Heroku & Firebase!
    <div className="loader">
        Loading...
    </div>
    </div>
);

export default Spinner;