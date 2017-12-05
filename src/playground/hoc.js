//HOC  /component renders another component
//good for nesting private components
//reuse code, prop manipulation abstract state


import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
   <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
   </div>
);

//reuse this hoc
// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             <p>this is private info. Please dont share!</p>
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAutheticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
}

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<Info isAutheticated={true} info="these are the details" />, document.getElementById('app'));