import React from 'react';
import { connect } from 'react-redux'
import ImageForm from './ImageForm';
import { startAddImage }  from '../actions/images';


export class AddImagePage extends React.Component {
    onSubmit = (image) => {
        this.props.startAddImage(image);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
            <h1>Add an Image</h1>
            <ImageForm 
                onSubmit={this.onSubmit}
            />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddImage: (image) => dispatch(startAddImage(image))
});

export default connect(undefined, mapDispatchToProps)(AddImagePage);