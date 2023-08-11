const initialState = {
    categories: []
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "success/fetchCategories":
            return {
                ...state,
                categories: action.payload
            }

        default:
            return state
    }
}

export default categoryReducer