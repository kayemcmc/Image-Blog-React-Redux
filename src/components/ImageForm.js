import React, { Component } from 'react';

import styled from 'styled-components';


const Img = styled.img`
    width: 850px;
`;

class ImageForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: props.image ? props.image.description : '', 
      category: props.image ? props.image.category : '',
      imagePreviewUrl: props.image ? props.image.imagePreviewUrl : '',
      error: ''
    };
  }
 
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=> ({description}));
  };
  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState(()=> ({category}));
  };

  handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend =() => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }  
    reader.readAsDataURL(file);
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.category) {
      this.setState(() => ({ error: 'Please provide description and category' }));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        category: this.state.category,
        imagePreviewUrl: this.state.imagePreviewUrl
      });
      
    }
  }
  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<Img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div className="content-container">
        <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
          type="text"
          placeholder="Category"
          autoFocus
          value={this.state.category}
          onChange={this.onCategoryChange}
        />
        <input 
          type="file"
          onChange={this.handleImageChange}
        />
        <button>Add or Edit Your Image!</button>
        </form>

        <div className="imgPreview">
          {$imagePreview}
        </div>

      </div>
    )
  }
}
  
  export default ImageForm;