import React from 'react';
import { connect } from 'react-redux'
import ImageForm from './ImageForm';
import { addImage }  from '../actions/images';

const AddImagePage = (props) => (
    <div>
        <h1>Add an Image</h1>
        <ImageForm 
            onSubmit={(image) => {
                props.dispatch(addImage(image));
            }}
        />
    </div>
);

export default connect()(AddImagePage);