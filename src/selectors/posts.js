
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
         console.log(a.postTime);
            return -1;
         //return a.postTime < b.postTime ? 1 : -1;
      }
   });
}
