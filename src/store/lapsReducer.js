
const defaultState = 
    {
        laps: [],
        savedLaps: []
    }


const SET_CURRENT_LAPS = "SET_CURRENT_LAPS"
const ADD_SAVED_LAP = "ADD_SAVED_LAP"
const DELETE_SAVED_LAP = "DELETE_SAVED_LAP"

export const lapsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case SET_CURRENT_LAPS:
            return {...state, laps: action.payload}

        case ADD_SAVED_LAP:
            return {...state, savedLaps: [...state.savedLaps, action.payload]}

        case DELETE_SAVED_LAP:
            return {...state, savedLaps: state.savedLaps.filter((lap,index) => index !== action.payload)}

        default:
            return state
    }
}

export const setCurrentLapsAction = (payload) => ({ type: SET_CURRENT_LAPS, payload })
export const addSavedLapAction = (payload) => ({ type: ADD_SAVED_LAP, payload }) 
export const deleteSavedLapAction = (payload) => ({ type: DELETE_SAVED_LAP, payload }) 