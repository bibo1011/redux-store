export default function updateReducer(state = initiaState, action) {
    switch (action.type) {
        case 'update/updateProduct': {
            return {
                ...state,
                products: [...action.products],
            };
        }
        case 'update/updateCategory': {
            return {
                ...state,
                categories: [...action.categories]
            };
        }
        case 'update/updateCurrentCategory': {
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        }
        default: 
            return state
    }
}