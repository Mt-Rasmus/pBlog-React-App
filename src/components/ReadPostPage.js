
import React from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../selectors/posts';

const ReadPostPage = (props) => {
   return (
      <div>
         <h1>{console.log('asdasd: ', props.post)}</h1>
         <h1>{props.post.title}</h1>
         <h3>{props.post.body}</h3>
      </div>
   );
}

const mapStateToProps = (state) => {
   const postId = window.location.pathname.split('/read/')[1];
   console.log(postId);
   console.log(state);
   return {
      post: getPostById(state.posts, postId)
   }
}

export default connect(mapStateToProps)(ReadPostPage);