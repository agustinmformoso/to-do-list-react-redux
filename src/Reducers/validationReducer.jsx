import {
    FORM_VALIDATION,
    FORM_VALIDATION_SUCCESS,
    FORM_VALIDATION_ERROR
} from '../Types'

const initialState = {
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FORM_VALIDATION:
            return {
                ...state,
                error: null
            }
        case FORM_VALIDATION_SUCCESS:
            return {
                ...state,
                error: null
            }
        case FORM_VALIDATION_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}