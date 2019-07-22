const filtersReducerDefaultState = {
    sortBy: 'title',
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortType
            };
        default:
            return state;
    }
}

export default filtersReducer