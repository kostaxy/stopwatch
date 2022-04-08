
const defaultState = 
    {
        laps: [],
        savedLaps: []
    }


const SET_CURRENT_LAPS = "SET_CURRENT_LAPS"
const ADD_SAVED_LAPS = "ADD_SAVED_LAPS"

export const lapsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case SET_CURRENT_LAPS:
            return {...state, laps: action.payload}

        case ADD_SAVED_LAPS:
            return {...state, savedLaps: [...state.savedLaps, action.payload]}

        default:
            return state
    }
}

export const setCurrentLapsAction = (payload) => ({ type: SET_CURRENT_LAPS, payload })
export const addSavedLapsAction = (payload) => ({ type: ADD_SAVED_LAPS, payload }) 