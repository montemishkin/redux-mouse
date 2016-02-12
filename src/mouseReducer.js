// local imports
import {UPDATE_CLICK_STATE} from './updateClickState'
import {UPDATE_POSITION} from './updatePosition'


const defaultState = {
    x: 0,
    y: 0,
    isDown: false,
    isUp: true,
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
