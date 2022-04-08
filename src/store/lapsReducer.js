
const defaultState = 
    {
        laps: [],
        savedLaps: {
            name: '',
            laps: []
        }
    }


const SET_CURRENT_LAPS = "SET_CURRENT_LAPS"
const SET_SAVED_LAPS = "SET_SAVED_LAPS"

export const lapsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case SET_CURRENT_LAPS:
            return {...state, laps: action.payload}

        case SET_SAVED_LAPS:
            return {...state, savedLaps: action.payload}

        default:
            return state
    }
}

export const setCurrentLapsAction = (payload) => ({ type: SET_CURRENT_LAPS, payload })
export const setSavedLapsAction = (payload) => ({ type: SET_SAVED_LAPS, payload }) 