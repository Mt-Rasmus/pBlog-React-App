
import React from 'react';
import { connect } from 'react-redux'; // connect connects you component to the redux store
import { getFilteredPosts } from '../selectors/posts';
import PostListItem from './PostListItem';

// Used in DashBoardPage
const PostList = (props) => {
   return (
      <div className="content-container">
         {
         props.posts.length === 0 ? (
            <div>
               No posts
            </div>
         ) : (
         <div className="list-body">
            <h2 className="list-body__headline">Blog Posts</h2>
         {
            props.posts.map((post) => {
               return <PostListItem key={post.id} post={post} />
            })
         }
         </div>
         )
         }
      </div>
   );
}

const mapStateToProps = (state) => {  
   return {
      posts: getFilteredPosts(state.posts, state.filters)
   } 
}

export default connect(mapStateToProps)(PostList);
