
export const addSearchFilter = (searchString = '') => {
   return ({
      type: 'SEARCH_FILTER',
      searchString
   })
}

export const sortByTitle = () => {
   return ({
      type: 'SORT_BY_TITLE'
   })
}

export const sortByTime = () => {
   return ({
      type: 'SORT_BY_TIME'
   })
}

