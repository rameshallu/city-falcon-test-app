import { combineReducers } from 'redux'
import watchlist from './watchlist/reducer'

const rootReducer = combineReducers({
    watchlist,
})

export default rootReducer
