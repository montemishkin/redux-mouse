export const UPDATE_CLICK_STATE = 'redux-mouse/UPDATE_CLICK_STATE'


export default (isDown) => {
    return {
        type: UPDATE_CLICK_STATE,
        isDown,
        isUp: !isDown,
    }
}
