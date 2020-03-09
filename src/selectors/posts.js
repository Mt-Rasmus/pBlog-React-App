
export const getFilteredPosts = (posts, { searchString }) => {
   console.log(searchString);
   //return posts;
   //return posts.filter((post) => post.title.includes('a'));
   if(searchString)
      return posts.filter((post) => post.title.toLowerCase().includes(searchString.toLowerCase()));
   else
      return posts;
}
