
const defaultState = {
    isRunning: false,
    time: {
        milliseconds: 0,
        seconds: 0,
        minutes: 0
    },
    startTime: null
}

const SET_IS_RUNNING = 'SET_IS_RUNNING';
const SET_TIME = 'SET_TIME'
const SET_START_TIME = 'SET_START_TIME'
  
export const timeReducer = (state = defaultState, action) => {
    switch (action.type) {

        case SET_START_TIME:
            return { ...state, startTime: action.payload }
        
        case SET_TIME:
            return { ...state, time: action.payload }

        case SET_IS_RUNNING:
            return { ...state, isRunning: action.payload }

        default:
            return state
    }
}


export const setIsRunningAction = (payload) => ({ type: SET_IS_RUNNING, payload })
export const setTimeAction = (payload) => ({ type: SET_TIME, payload }) 
export const setStartTimeAction = (payload) => ({ type: SET_START_TIME, payload }) 