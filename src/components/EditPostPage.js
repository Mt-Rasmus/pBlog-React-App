
import React from 'react';
import PostForm from './PostForm';
import { initDeletePost, initEditPost } from '../actions/posts';
import { connect } from 'react-redux';

export class EditPostPage extends React.Component {

   onDelete = () => {
      this.props.initDeletePost(this.props.post);
      this.props.history.push('/');
   }

   onSubmit = (updates) => {
      this.props.initEditPost(this.props.post,updates);
      this.props.history.push('/');      
   }

   render() {
      return (
         <div>
            <PostForm post={this.props.post} onSubmit={this.onSubmit}/>
            <button onClick={this.onDelete}>Delete post</button>
         </div>
      )
   }
}

const mapStateToProps = (state, props) => {
   return {
      post: state.posts.find((post) => post.id === props.match.params.id) /* param defined in AppRouter.js */
   }
}

const mapDispatchToProps = (dispatch) => ({
   initDeletePost: (post) => dispatch(initDeletePost(post)),
   initEditPost: (post,updates) => dispatch(initEditPost(post,updates))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditPostPage)
