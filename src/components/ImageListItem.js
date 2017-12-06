import React from 'react';
import { connect } from 'react-redux';
import {removeImage} from '../actions/images';
import styled from 'styled-components';


const Img = styled.img`
    width: 418px;
`;

const ImageListItem = ({ dispatch, id, description, category, imagePreviewUrl, createdAt}) => (
    <div>
    <Img src={imagePreviewUrl} />
        <h3>{description}</h3>
        <p>{category}</p>
        <button
            onClick={() => {
                dispatch(removeImage({id}));
            }}
        >Remove</button>
       
    </div>
);

export default connect()(ImageListItem);