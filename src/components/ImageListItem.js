import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Img = styled.img`
    width: 418px;
`;

const ImageListItem = ({  id, description, category, imagePreviewUrl, createdAt}) => (
    <div>
    <Link to={`edit/${id}`}>
    <Img src={imagePreviewUrl} />
    </Link>  
        <h3>{description}</h3>
        <p>{category}</p>
  
   
    </div>
);

export default ImageListItem;