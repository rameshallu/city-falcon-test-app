import { createStore } from 'redux'
import rootReducer from './rootReducer'
import initialState from './initialState'

export default function configureStore(state=initialState) {
    return createStore(
        rootReducer,
        state,
    );
}
