const imagesReducerDefaultState = [];

//export default imageReducer using an arrow function instead
export default (state = imagesReducerDefaultState, action) => {
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
};