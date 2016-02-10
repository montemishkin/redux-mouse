// local imports
import addEventHandlers from 'util/addEventHandlers'


export default (options) =>
    // return store enhancer
    (createStore) =>
        // return enhanced version of `createStore`
        (...args) =>
            // return store after adding event handlers
            addEventHandlers(createStore(...args), options)
