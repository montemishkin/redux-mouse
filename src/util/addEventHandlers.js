// third party imports
import throttle from 'lodash/throttle'
// local imports
import updatePosition from 'actions/creators/updatePosition'
import updateClickState from 'actions/creators/updateClickState'


export default (store, options = {}) => {
    const {
        positionThrottleTime = 100,
        clickStateThrottleTime = 100,
    } = options

    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', throttle(
            (event) => store.dispatch(updatePosition(event)),
            positionThrottleTime
        ))
        window.addEventListener('mouseup', throttle(
            () => store.dispatch(updateClickState(false)),
            clickStateThrottleTime
        ))
        window.addEventListener('mousedown', throttle(
            () => store.dispatch(updateClickState(true)),
            clickStateThrottleTime
        ))
    }

    // return store so that call is transparent
    return store
}
