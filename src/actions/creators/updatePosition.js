// local imports
import UPDATE_POSITION from 'actions/types/UPDATE_POSITION'


export default ({x, y}) => {
    return {
        type: UPDATE_POSITION,
        x,
        y,
    }
}
