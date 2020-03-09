
const filtersDefaultState = {};

const filtersReducer = (state = filtersDefaultState, action) => {
   switch(action.type) {
      case 'SEARCH_FILTER':
         return {
            ...state,
            searchString: action.searchString
         }
      default:
         return state;
   }
}

export { filtersReducer as default }