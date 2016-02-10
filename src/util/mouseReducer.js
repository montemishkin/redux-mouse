// local imports
import UPDATE_CLICK_STATE from 'actions/types/UPDATE_CLICK_STATE'
import UPDATE_POSITION from 'actions/types/UPDATE_POSITION'


const defaultState = {
    x: 0,
    y: 0,
    isDown: false,
}


export default (state = defaultState, {type, ...actionData}) => {
    switch (type) {
        case UPDATE_CLICK_STATE:
        case UPDATE_POSITION:
            return {
                ...state,
                ...actionData,
            }
        default:
            return state
    }
}
