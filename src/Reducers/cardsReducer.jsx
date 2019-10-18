import {
    CARD_CREATE,
    CARD_CREATE_SUCCESS,
    CARD_CREATE_ERROR,
    CARD_READ,
    CARD_READ_SUCCESS,
    CARD_READ_ERROR
} from '../Types'

const initialState = {
    cards: [],
    error: null,
    loading: false,
    card: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CARD_CREATE:
            return {
                ...state,
                error: null
            }
        case CARD_CREATE_SUCCESS:
            return {
                ...state,
                error: null,
                cards: [...state.cards, action.payload]
            }
        case CARD_CREATE_ERROR:
            return {
                ...state,
                error: true
            }
        case CARD_READ:
            return {
                ...state,
                loading: true,
                card: {}
            }
        case CARD_READ_SUCCESS:
            return {
                ...state,
                cards: action.payload,
                loading: false,
                error: false,
                card: {}
            }
        case CARD_READ_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                producto: {}
            }
        default:
            return state
    }
}