const defaultState = {
    cash: 0
}


export const lapsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case "SET_CURRENT_LAPS":
            return { ...state, cash: state.cash + action.payload }

        case "GET_CURRENT_LAPS":
            return { ...state, cash: state.cash + action.payload }

        case "SET_SAVED_LAPS":
            return { ...state, cash: state.cash + action.payload }

        case "GET_SAVED_LAPS":
            return { ...state, cash: state.cash + action.payload }

        default:
            return state
    }
}