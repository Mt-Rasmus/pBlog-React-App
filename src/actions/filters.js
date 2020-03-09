
export const addSearchFilter = (searchString = '') => {
   return ({
      type: 'SEARCH_FILTER',
      searchString
   })
}
