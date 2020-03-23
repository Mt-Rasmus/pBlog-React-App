
import React from 'react';
import PostForm from './PostForm';
import DeletionModal from './DeletionModal';
import { initDeletePost, initEditPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clipboard from 'react-clipboard.js';

export class EditPostPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         showDeletionModal: false
       };
   }

   onDelete = () => {
      this.props.initDeletePost(this.props.post);
      this.props.history.push('/');
   }

   onSubmit = (updates) => {
      this.props.initEditPost(this.props.post,updates);   
   }

   handleShowDeletionModal = () => {
      this.setState({ showDeletionModal: true });
   }  

   handleCloseDeletionModal = () => {
      this.setState({ showDeletionModal: false });
   }

   render() {
      const link = window.location.href.split('/edit')[0] + `/read/${this.props.post.pub_id}`;
      return (
         <div className="content-container">
            <div className="icon-container">
               <div className="icon-container-sub">
                  <Link 
                     to={`/read/${this.props.post.pub_id}`} 
                     key={this.props.post.pub_id}
                     className="icon--align"
                     >          
                     <img src={'/images/book.png'} className="icon icon--read"/>              
                  </Link>
                  <p className="icon--align icon-text">View published blog post</p>            
               </div>
               <div className="icon-container-sub">
                  <Clipboard 
                     data-clipboard-text={link} 
                     className="icon-container--clipboard icon--align"
                     >
                     <img src={'/images/clipboard.png'} className="icon"/>
                  </Clipboard>
                  <p className="icon--align icon-text">Copy blog page link to clipboard</p>
               </div>            
            </div>

            <h2 className="page-header">Edit post</h2>
            <PostForm post={this.props.post} onSubmit={this.onSubmit}/>
            <button onClick={this.handleShowDeletionModal} className="button button--delete-post">Delete post</button>
            <DeletionModal 
               showModal={this.state.showDeletionModal} 
               handleCloseDeletionModal={this.handleCloseDeletionModal} 
               onDelete={this.onDelete}
            />            
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
