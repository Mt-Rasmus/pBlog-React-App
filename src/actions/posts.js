
import database from '../firebase/firebase';

const addPost = (post) => {
   return ({
      type: 'ADD_POST',
      post
   })
}

export const initAddPost = (postData = {}) => {
   return (dispatch, getState) => { 

      const uid = getState().auth.uid;
      const {
         title = '',
         body = '',
         postTime = 0
      } = postData; // Destructuring postData. Default values above
      const post = { title, body, postTime };

      return database.ref(`users/${uid}/posts`).push(post).then((ref) => { // 1. add to database
         dispatch(addPost({ // 2. add to redux store (after .then())
            id: ref.key,
            ...post
         }))
      })
   }
}

const deletePost = (post) => {
   return ({
      type: 'DELETE_POST',
      post
   })
}

export const initDeletePost = (post = {}) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/posts/${post.id}`).remove().then(() => {
         dispatch(deletePost(post))
      })
   }
}

const EditPost = (post, updates) => {
   return ({
      type: 'EDIT_POST',
      post,
      updates
   })   
}

export const initEditPost = (post = {}, updates) => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/posts/${post.id}`).update(updates).then(() => {
         dispatch(EditPost(post, updates))
      })
   }
}

const setPosts = (posts) => {
   return ({
      type: 'SET_POSTS',
      posts
   })
}

// Makes sure previously added posts are there after refresh, or restart of dev server, etc.
export const initSetPosts = () => {
   return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/posts`).once("value").then((snapShot) => {
         const posts = [];
         snapShot.forEach((child) => {
            posts.push({
               id: child.key,
               ...child.val()
            });
         })
         dispatch(setPosts(posts))
      })
   }   
}