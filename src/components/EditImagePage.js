import React from 'react';

const EditImagePage = (props) => {
    console.log(props);
   return (
    <div>Editing image with the id of {props.match.params.id}</div>
   )
};

export default EditImagePage;