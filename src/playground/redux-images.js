import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_IMAGE
const addImage = (
    {
        description = '',
        note = '',
        category = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_IMAGE',
    image: {
        id: uuid(),
        description,
        note,
        category,
        createdAt
    }
});
//REMOVE_IMAGE
const removeImage = ({ id } = {}) => 
({
    type: 'REMOVE_IMAGE',
    id
});
//EDIT_IMAGE
const editImage = (id, updates) => ({
    type: 'EDIT_IMAGE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
    
});
//SORT_BY_CATEGORY
const sortByCategory = () => ({
    type: 'SORT_BY_CATEGORY'
   
});
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


//IMAGES REDUCER

const imagesReducerDefaultState = [];

const imagesReducer = (state = imagesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_IMAGE':
           return [
               ...state,
               action.image
           ];
        case 'REMOVE_IMAGE':
        //if they are equal this will return false and get deleted
           return state.filter(({ id }) => id !== action.id);
        case 'EDIT_IMAGE':
           return state.map((image) => {
                if (image.id === action.id) {
                    return {
                        ...image,
                        ...action.updates
                    };
                } else {
                    return image;
                }
           });
        default: 
            return state;
    }
}

//Filter Reducer

const filtersReducerDefaultState = { 
    text : '', 
    sortBy: 'Date', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action ) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
        return  {
            ...state,
            text: action.text
        };
        case 'SORT_BY_DATE':
        return  {
            ...state,
            sortBy: 'date'
        };
        case 'SORT_BY_CATEGORY':
        return  {
            ...state,
            sortBy: 'category'
        };
        case 'SET_START_DATE':
        return  {
            ...state,
            sortBy: action.startDate
        };
        case 'SET_END_DATE':
        return  {
            ...state,
            sortBy: action.endDate
        };
        default: 
            return state;
    }
}


//GET VISIBLE IMAGES
//filters destructure so I can list all so instead of = (images, filters) the filters objects

const getVisibleImages = (images, {text, sortBy, startDate, endDate}) => {
    return images.filter((image) => {
        //startDate !== number only if its a number will we filter images
        const startDateMatch = typeof startDate !== 'number' || image.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || image.createdAt <= endDate;
        const textMatch = image.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
        //if its a match for all three the item filtered will be returned
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
         else if (sortBy === 'category') {
            return a.category < b.category ? 1: -1;
         }   
    });
}
//Store creation

const store = createStore(
    combineReducers({
        images: imagesReducer,
        filters: filtersReducer
    })
);


//
store.subscribe(() => {
    const state = store.getState();
    const visibleImages = getVisibleImages(state.images, state.filters)
    console.log(visibleImages);
});


const imageOne = store.dispatch(addImage({description: "snow", category: 'holiday', createdAt: 1000 }));
const imageTwo = store.dispatch(addImage({description: "ice", category: 'holiday' }));


// // store.dispatch(removeImage({ id: imageOne.image.id }));

// store.dispatch(editImage(imageTwo.image.id, {category: 'christmas'}));

// store.dispatch(setTextFilter('ice'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByCategory());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));



const demoState = {
    images: [{
        id: 'fgifg',
        description: 'Snow',
        note: 'Taken in Wisconsin, 2010',
        category: 'Fall',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or category
        startDate: undefined,
        ednDate: undefined
    }
};

