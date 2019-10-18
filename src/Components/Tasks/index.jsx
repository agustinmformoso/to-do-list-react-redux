import React, { useEffect } from 'react'
import { TaskCol, TaskCard } from '../'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { cardReadAction } from '../../Actions/cardsActions'

const Tasks = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const readCards = () => dispatch(cardReadAction())
        readCards()
    }, [])

    const loading = useSelector(state => state.cards.loading)
    const error = useSelector(state => state.cards.error)
    const cards = useSelector(state => state.cards.cards)

    return (
        <Col md={{ span: 10, offset: 1 }}>
            <Row>
                <TaskCol title="to-do" cards={cards}/> 
                <TaskCol title="doing" />
                <TaskCol title="done" />
            </Row>
        </Col> 
    )
}

export default Tasks
