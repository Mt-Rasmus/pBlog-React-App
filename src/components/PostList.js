
import React from 'react';
import { connect } from 'react-redux'; // connect connects you component to the redux store
import { Link } from 'react-router-dom';
import { getFilteredPosts } from '../selectors/posts';
import moment from 'moment';

// Used in DashBoardPage
const PostList = (props) => {
   return (
      <div>
         {
         props.posts.length === 0 ? (
            <div>
               No posts
            </div>
         ) : (
         <div>
         {
            props.posts.map((post) => {
               return (
                  <Link to={`/edit/${post.id}`} key={post.id}>
                     <div key={post.id}>
                        <span>{post.title}</span>
                        <span>{moment(post.postTime).format('MMMM Do YYYY, h:mm:ss a')}</span>
                     </div>            
                  </Link>
               );
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
