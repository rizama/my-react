import ActionType from "./globalActionType";

// initial State Global
const globalState = {
    totalOrder: 1
}

// Reducer 
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.PLUS_ORDER:
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        case ActionType.THROW_ORDER:
            const min_order = 0;
            if (state.totalOrder <= 0) {
                return {
                    ...state,
                    totalOrder: min_order
                }
            }
            return {
                ...state,
                totalOrder: state.totalOrder - 1
            }
        default:
            return state
    }
}

export default rootReducer;