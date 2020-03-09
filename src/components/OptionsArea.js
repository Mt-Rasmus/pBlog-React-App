
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSearchFilter } from '../actions/filters';

const OptionsArea = (props) => {

   const onTextFilter = (e) => {
      props.addSearchFilter(e.target.value)
   }

   return (
      <div>
         <input type="text" onChange={onTextFilter} />
         <select>
            <option value="time">By time</option>
            <option value="title">By title</option>
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
   addSearchFilter: (filterString) => dispatch(addSearchFilter(filterString))
})

export default connect(undefined,mapDispatchToProps)(OptionsArea);
