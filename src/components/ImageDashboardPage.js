import React from 'react';
import ImagesList from './ImagesList';
import ImagesListFilters from './ImagesListFilters';

const ImageDashboardPage = () => (
    <div>
        <ImagesListFilters />
         <ImagesList />
     </div>
);

export default ImageDashboardPage;