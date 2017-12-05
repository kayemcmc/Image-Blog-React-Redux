import uuid from 'uuid';

//action generators for images

//ADD_IMAGE
export const addImage = (
    {
        description = '',
        note = '',
        category = '',
        imageUrl = '',
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_IMAGE',
    image: {
        id: uuid(),
        description,
        note,
        category,
        imageUrl,
        createdAt
    }
});
//REMOVE_IMAGE
export const removeImage = ({ id } = {}) => 
({
    type: 'REMOVE_IMAGE',
    id
});
//EDIT_IMAGE
export const editImage = (id, updates) => ({
    type: 'EDIT_IMAGE',
    id,
    updates
});