
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSearchFilter, sortByTitle, sortByTime } from '../actions/filters';

const OptionsArea = (props) => {

   const onTextFilter = (e) => {
      props.addSearchFilter(e.target.value)
   }

   const onChangeSortBy = (e) => {
      if (e.target.value == "title")
         props.sortByTitle(e.target.value)
      else if (e.target.value == "time")
         props.sortByTime(e.target.value)
   }

   return (
      <div>
         <input type="text" onChange={onTextFilter} />
         <select onChange={onChangeSortBy}>
            <option value="time" >By time</option>
            <option value="title" >By title</option>
         </select>
         <div>
            <Link to="/addpost">
               <button>Add post</button>            
            </Link>
         </div>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => ({
   addSearchFilter: (filterString) => dispatch(addSearchFilter(filterString)),
   sortByTitle: () => dispatch(sortByTitle()),
   sortByTime: () => dispatch(sortByTime())
})

export default connect(undefined,mapDispatchToProps)(OptionsArea);
