import {
    CARD_CREATE,
    CARD_CREATE_SUCCESS,
    CARD_CREATE_ERROR,
    CARD_READ,
    CARD_READ_SUCCESS,
    CARD_READ_ERROR
} from '../Types'

import axiosClient from '../Config/axios'

export function cardCreateAction (card) {
    return (dispatch) => {
        dispatch(initCardCreate())

        axiosClient.post('/todo', card)
            .then(res => {
                console.log(res)
                dispatch(cardCreateSuccess(card))
            })
            .catch(err => {
                console.log(err)
                dispatch(cardCreateError())
            })
    }
}

export const initCardCreate = () => ({
    type: CARD_CREATE 
})

export const cardCreateSuccess = (card) => ({
    type: CARD_CREATE_SUCCESS,
    payload: card
})

export const cardCreateError = () => ({
    type: CARD_CREATE_ERROR
})

export function cardReadAction () {
    return (dispatch) => {
        dispatch(initCardRead())

        axiosClient.get('/todo')
            .then(res => {
                dispatch(cardReadSuccess(res.data))
            })
            .catch(err => {
                dispatch(cardReadError())
            })
    }
}

export const initCardRead = () => ({
    type: CARD_READ
})

export const cardReadSuccess = (cards) => ({
    type: CARD_READ_SUCCESS,
    payload: cards
})

export const cardReadError = () => ({
    type: CARD_READ_ERROR
})