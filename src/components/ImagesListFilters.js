import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByCategory } from '../actions/filters';

const ImagesListFilters = (props) => (
    <div>
    <input type="text" 
            value={props.filters.text} 
            onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
         }} 
     />
      <select
         value={props.filters.sortBy}
         onChange={(e) => {
             if (e.target.value === 'date') {
                props.dispatch(sortByDate());
             } else if (e.target.value === 'category') {
                props.dispatch(sortByCategory());
             }
         }}
      >
        <option value="date">Date</option>
        <option value="category">Category</option>
       
      </select>
    </div>
);


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ImagesListFilters);