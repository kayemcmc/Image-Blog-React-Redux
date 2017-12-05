//GET VISIBLE IMAGES
//filters destructure so I can list all so instead of = (images, filters) the filters objects

//exports conts getVisibleImages reducers
export default (images, {text, sortBy, startDate, endDate}) => {
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
};