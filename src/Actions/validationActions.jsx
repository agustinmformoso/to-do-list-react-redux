import {
    FORM_VALIDATION,
    FORM_VALIDATION_SUCCESS,
    FORM_VALIDATION_ERROR
} from '../Types'

export function formValidationAction () {
    return dispatch => {
        dispatch(initFormValidation())
    }
}

export const initFormValidation = () => {
    return {
        type: FORM_VALIDATION
    }
}

export const formValidationSuccess = () => {
    return {
        type: FORM_VALIDATION_SUCCESS
    }
}

export const formValidationError = () => {
    return {
        type: FORM_VALIDATION_ERROR
    }
}