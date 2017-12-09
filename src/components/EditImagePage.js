import React from 'react';
import { connect } from 'react-redux';
import ImageForm from './ImageForm';
import { startEditImage, startRemoveImage } from '../actions/images';


export class EditImagePage extends React.Component {
    onSubmit = (image) => {
        this.props.startEditImage(this.props.image.id, image);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveImage({ id: this.props.image.id});
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
            <ImageForm 
                image={this.props.image}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove </button>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        image: state.images.find((image) => image.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditImage: (id, image) => dispatch(startEditImage(id, image)),
    startRemoveImage: (data) => dispatch(startRemoveImage(data))
});
export default connect (mapStateToProps, mapDispatchToProps)(EditImagePage);