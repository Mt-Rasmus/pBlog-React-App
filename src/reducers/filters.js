
const filtersDefaultState = {};

const filtersReducer = (state = filtersDefaultState, action) => {
   switch(action.type) {
      case 'SEARCH_FILTER':
         return {
            ...state,
            searchString: action.searchString
         }
      case 'SORT_BY_TITLE':
         return {
            ...state,
            sortBy: 'title'
         }
      case 'SORT_BY_TIME':
         return {
            ...state,
            sortBy: 'time'
            }         
      default:
         return state;
   }
}

export { filtersReducer as default }