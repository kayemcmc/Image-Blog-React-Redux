import React, {Component} from 'react';
import { connect } from 'react-redux';
import ImageListItem from './ImageListItem';
import selectImages from '../selectors/images';
var Masonry = require('react-masonry-component');



class ImagesList extends Component {
  render (props) {
      var childElements = this.props.images.map(function(image){
          return (
           <li className="image-element-class" style={{marginRight: '25px'}} key={image.id}>
           <ImageListItem  {...image} />
       </li>
          
           );
       }); 
       return (
          <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
            
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              
          >
              {childElements}
          </Masonry>
      ); 
  }
}


//HOC
const mapStateToProps = (state) => {
    return {
        images : selectImages(state.images, state.filters)
    };
}


export default connect(mapStateToProps)(ImagesList);