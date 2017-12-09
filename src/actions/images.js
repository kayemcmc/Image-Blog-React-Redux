import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_IMAGE
export const addImage = (image) => ({
    type: 'ADD_IMAGE',
    image
});

export const startAddImage = (imageData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            category = '',
            imagePreviewUrl = '',
            createdAt = 0
        } = imageData;
        const image = {description, note, category, imagePreviewUrl, createdAt};
        database.ref('images').push(image)
        .then((ref) => {
            dispatch(addImage({
                id: ref.key,
                ...image
            }));
        });
    };
};

//REMOVE_IMAGE
export const removeImage = ({ id } = {}) => 
({
    type: 'REMOVE_IMAGE',
    id
});

export const startRemoveImage = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`images/${id}`).remove().then(()=> {
            dispatch(removeImage({ id }));
        });
    };
};
//EDIT_IMAGE
export const editImage = (id, updates) => ({
    type: 'EDIT_IMAGE',
    id,
    updates
});


//SET_IMAGES
export const setImages = (images) => ({
    type: 'SET_IMAGES',
    images
});

export const startSetImages = () => {
    return (dispatch) => {
       return database.ref('images').once('value').then((snapshot) => {
            const images = [];

            snapshot.forEach((childSnapshot) => {
                images.push ({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setImages(images));
        });
    };
};
