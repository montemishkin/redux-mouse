export const UPDATE_POSITION = 'redux-mouse/UPDATE_POSITION'


export default ({x, y}) => {
    return {
        type: UPDATE_POSITION,
        x,
        y,
    }
}
