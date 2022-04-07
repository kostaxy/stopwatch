
const defaultState = {
    cash: 0
  }
  
export const timeReducer = (state = defaultState, action) => {
    switch (action.type) {

        case "SET_START_TIME":
            return { ...state, cash: state.cash + action.payload }

        case "GET_START_TIME":
            return { ...state, cash: state.cash + action.payload }

        case "SET_STOPWATCH_IS_PAUSED":
            return { ...state, cash: state.cash + action.payload }

        case "GET_STOPWATCH_IS_PAUSED":
            return { ...state, cash: state.cash + action.payload }

        case "SET_STOPWATCH_TIME":
            return { ...state, cash: state.cash + action.payload }

        case "GET_STOPWATCH_TIME":
            return { ...state, cash: state.cash + action.payload }


        default:
            return state
    }
}