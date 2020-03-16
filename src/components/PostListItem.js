
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostListItem = ( { post } ) => (
   
   <Link to={`/edit/${post.pub_id}`} key={post.pub_id}>
      <div>
         <span>{post.title}</span>
         <p>Last Edited:</p>
         <span>{moment(post.postTime).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </div>            
   </Link>
)

export default PostListItem;
