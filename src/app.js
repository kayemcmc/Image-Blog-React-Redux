import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addImage } from './actions/images';
import { setTextFilter } from './actions/filters';
import getVisibleImages from './selectors/images'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();


store.dispatch(addImage({description: "snow holiday", category: 'holiday', imagePreviewUrl: 'https://res.cloudinary.com/kayemcmc/image/upload/v1512348605/tim-gouw-165547_f4oigp.jpg', createdAt: 1000 }));
store.dispatch(addImage({description: "ice holiday", category: 'holiday', imagePreviewUrl:'https://res.cloudinary.com/kayemcmc/image/upload/c_scale,h_1120/v1512357653/brooke-lark-176362_x1iodu.jpg', createdAt: 3000 }));
store.dispatch(addImage({description: "ice holiday", category: 'holiday', imagePreviewUrl:'http://campus.ie/sites/default/files/styles/content-main/public/field/image/8307863112_eebe81d1d3_z.jpg?itok=XCHRmgMq', createdAt: 8000  }));
store.dispatch(addImage({description: "ice holiday", category: 'holiday', imagePreviewUrl:'https://inhabitat.com/wp-content/blogs.dir/1/files/2013/12/Rockefeller-Tree-Lighting-2014-Far1.jpg' }));

store.dispatch(addImage({description: "ice holiday", category: 'holiday', imagePreviewUrl:'http://nordicsoccer.org/_uploads/555e137f616e742c37080000/holiday-season-1.jpg' }));



const state = store.getState();
const visibleImages = getVisibleImages(state.images, state.filters);
console.log(visibleImages);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
   
)

ReactDOM.render(jsx, document.getElementById('app'));
