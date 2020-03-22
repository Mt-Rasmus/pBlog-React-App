
import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { initAddPost } from '../actions/posts';

export class AddPostPage extends React.Component {

   onSubmit = (post) => {
      this.props.initAddPost(post);
      this.props.history.push('/'); // gets to back to the page before (dashboard here)
   };

   render() {
      return (
         <div className="content-container">
            <h2 className="page-header page-header-add">Add post</h2>
            <PostForm 
               onSubmit={this.onSubmit} // passing above onSubmit method as prop to PostForm
            />          
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   initAddPost: (post) => dispatch(initAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);
