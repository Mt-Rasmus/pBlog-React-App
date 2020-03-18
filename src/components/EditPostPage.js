
import React from 'react';
import PostForm from './PostForm';
import { initDeletePost, initEditPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clipboard from 'react-clipboard.js';

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
      const link = window.location.href.split('/edit')[0] + `/read/${this.props.post.pub_id}`;
      return (
         <div className="content-container">
            <Link 
               to={`/read/${this.props.post.pub_id}`} 
               key={this.props.post.pub_id}
               className="icon-container"
               >          
               <img src={'/images/book.png'} className="icon"/>
               <p>View published blog post</p>
            </Link>
            <Clipboard 
               data-clipboard-text={link} 
               className="icon-container icon-container--clipboard"
               >
               <img src={'/images/clipboard.png'} className="icon"/>
               <p>Copy blog page link to clipboard</p>
            </Clipboard>
            <PostForm post={this.props.post} onSubmit={this.onSubmit}/>
            <button onClick={this.onDelete} className="button button--delete-post">Delete post</button>
         </div>
      )
   }
}

const mapStateToProps = (state, props) => {
   return {
      post: state.posts.find((post) => post.pub_id === props.match.params.id) /* param defined in AppRouter.js */
   }
}

const mapDispatchToProps = (dispatch) => ({
   initDeletePost: (post) => dispatch(initDeletePost(post)),
   initEditPost: (post,updates) => dispatch(initEditPost(post,updates))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditPostPage)
