import { combineReducers } from 'redux'
import cardsReducer from './cardsReducer'
import validationReducer from './validationReducer'

export default combineReducers({
    cards: cardsReducer,
    error: validationReducer
})