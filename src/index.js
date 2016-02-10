// local imports
import mouse_reducer from './util/mouseReducer'
import create_mouse_store_enhancer from './util/createMouseStoreEnhancer'


export const mouseReducer = mouse_reducer
export const createMouseStoreEnhancer = create_mouse_store_enhancer
// provide default mouse store enhancer
export const mouseStoreEnhancer = createMouseStoreEnhancer()


// export same interface as default
export default {
    mouseReducer,
    createMouseStoreEnhancer,
    mouseStoreEnhancer,
}
