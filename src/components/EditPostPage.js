
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
         <div>
            {/*<Link to={`/read/${this.props.post.pub_id}`} key={this.props.post.pub_id}><p>{link}</p></Link>*/}
            <Link to={`/read/${this.props.post.pub_id}`} key={this.props.post.pub_id}>
               <button>View published blog post</button>
            </Link>
            <Clipboard data-clipboard-text={link}>
               Copy blog page link to clipboard
            </Clipboard>
            <PostForm post={this.props.post} onSubmit={this.onSubmit}/>
            <button onClick={this.onDelete}>Delete post</button>
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
