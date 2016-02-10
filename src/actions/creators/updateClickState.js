// local imports
import UPDATE_CLICK_STATE from 'actions/types/UPDATE_CLICK_STATE'


export default (isDown) => {
    return {
        type: UPDATE_CLICK_STATE,
        isDown,
    }
}
