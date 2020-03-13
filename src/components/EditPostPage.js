
import React from 'react';
import PostForm from './PostForm';
import { initDeletePost, initEditPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
         {/*console.log(window.location.pathname.split('/edit/-')[1])*/}
            <Link to={`/read/${this.props.post.id}`} key={this.props.post.id}>
               <button>RIGHT HEA</button>
            </Link>
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
