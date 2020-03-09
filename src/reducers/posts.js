
const postsDefaultState = [];

const postsReducer = (state = postsDefaultState, action) => {
   switch(action.type) {
      case 'ADD_POST':
         return [
            ...state,
            action.post
         ];
      case 'DELETE_POST':
         return state.filter((post) => post.id !== action.post.id)
      case 'EDIT_POST':
         return state.map((post) => {
            return (post.id !== action.post.id ? post : (
               {
                  ...post,
                  ...action.updates
               }
            ))
         })
      case 'SET_POSTS':
         return action.posts
      default:
         return state;
   }
}

export { postsReducer as default }