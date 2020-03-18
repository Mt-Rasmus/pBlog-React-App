import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ( { post } ) => (
   
   <Link className="list-item" to={`/edit/${post.pub_id}`}>
   <div>
      <p className="list-item__title">{post.title}</p>
      <div className="list-item__sub"> 
         <p className="list-item__sub-text"> Last Edited: </p>
         <p>
            {moment(post.postTime).format('MMMM Do YYYY, h:mm a')}
         </p>
      </div>       
   </div>
        
   </Link>
)

export default PostListItem;