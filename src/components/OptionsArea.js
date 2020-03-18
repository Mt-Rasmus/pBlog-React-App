
import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <div className="content-container">
         <div className="option-group">
            <div className="input-group">
               <div>
                  <input 
                     type="text"
                     className="text-input input-group__item" 
                     placeholder="Search posts"
                     onChange={onTextFilter} />
               </div>
               <div>
                  <select type="text" className="select input-group__item" onChange={onChangeSortBy}>
                     <option value="time" >By time</option>
                     <option value="title" >By title</option>
                  </select>                 
               </div>
            </div>
            <div className="button-container">
               <NavLink className="button button--add-post" to="/addpost">
                  Add post           
               </NavLink>   
            </div>
      
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
