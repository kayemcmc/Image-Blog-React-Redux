import React from 'react';
import ImagesList from './ImagesList';
import ImagesListFilters from './ImagesListFilters';

const ImageDashboardPage = () => (
    <div>
        <div className="content-container">
        <ImagesListFilters />
        </div>
         <ImagesList />
     </div>
);

export default ImageDashboardPage;