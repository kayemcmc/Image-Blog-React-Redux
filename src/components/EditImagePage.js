import React from 'react';
import { connect } from 'react-redux';
import ImageForm from './ImageForm';
import { editImage, removeImage } from '../actions/images';


const EditImagePage = (props) => {
   return (
    <div>
        <ImageForm 
            image={props.image}
            onSubmit={(image) => {
                props.dispatch(editImage(props.image.id, image));
                props.history.push('/');
            
            }}
        />
        <button
        onClick={() => {
            props.dispatch(removeImage({id: props.image.id}));
            props.history.push('/');
        }}
    >Remove</button>
    </div>
   )
};

const mapStateToProps = (state, props) => {
    return {
        image: state.images.find((image) => image.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditImagePage);