
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const getFilteredPosts = (posts, { searchString, sortBy }) => {
   return posts.filter((post) => {
      if(searchString)
         return post.title.toLowerCase().includes(searchString.toLowerCase())
      else
         return post;
   })
   .sort((a,b) => {
      if (sortBy === 'title') {
         return a.title > b.title ? 1 : -1;
      } else if (sortBy === 'time') {
         return a.postTime < b.postTime ? 1 : -1;
      }
   });
}

export const getPostById = (id) => {
      //const uid = firebase.auth().currentUser.uid;
      const uid = 'Kn5eD4Dv5NYgXaD61wu2rygqQBo1';
      console.log('uid = ' + uid);
      const database = firebase.database();
      return database.ref(`users/${uid}/posts/${id}`).once('value').then((snapshot) => {
         console.log("snapshot val = ", snapshot.val());
         return snapshot.val();
      });
}

// export const getPostById = (posts, id) => {
//    return posts.find(post => post.id === id);
// }
