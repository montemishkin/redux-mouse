// third party imports
import throttle from 'lodash/throttle'
// local imports
import updatePosition from 'actions/creators/updatePosition'
import updateClickState from 'actions/creators/updateClickState'


export default (store, options = {}) => {
    const {
        positionThrottleTime = 100,
        clickStateThrottleTime = 100,
        target,
    } = options

    if (typeof window !== 'undefined') {
        const theTarget = typeof target === 'undefined' ? window : target

        theTarget.addEventListener('mousemove', throttle(
            (event) => store.dispatch(updatePosition(event)),
            positionThrottleTime
        ))
        theTarget.addEventListener('mouseup', throttle(
            () => store.dispatch(updateClickState(false)),
            clickStateThrottleTime
        ))
        theTarget.addEventListener('mousedown', throttle(
            () => store.dispatch(updateClickState(true)),
            clickStateThrottleTime
        ))
    }

    // return store so that call is transparent
    return store
}
