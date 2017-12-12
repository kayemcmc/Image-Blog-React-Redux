import React from 'react';
import { Link } from 'react-router-dom';
import ImagesList from './ImagesList';
import ImagesListFilters from './ImagesListFilters';


const ImageDashboardPage = () => (
    <div>
        <div className="content-container">
        <div className="page-header">
        <Link className="button" to="/create">Add New Image</Link>
        </div>
        <ImagesListFilters />
        </div>
         <ImagesList />
     </div>
);

export default ImageDashboardPage;