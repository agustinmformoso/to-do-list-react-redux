import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ButtonCustom, Input } from '../'
import { useDispatch, useSelector } from 'react-redux'
import { cardCreateAction } from '../../Actions/cardsActions'
import { formValidationAction, formValidationError, formValidationSuccess } from '../../Actions/validationActions'

const InputCard = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()
    const addCard = (card) => dispatch(cardCreateAction(card))
    const validateForm = () => dispatch(formValidationAction())
    const validateSuccess = () => dispatch(formValidationSuccess())
    const validateError = () => dispatch(formValidationError())

    const error = useSelector((state) => state.error.error)

    const handleSubmit = () => {
        validateForm()

        if (title.trim() === '' || description.trim() === '') {
            validateError()
            return
        }

        validateSuccess()

        addCard({
            title,
            description,
            classname: 'to-do'
        })
    }

    return (
        <Card className="shadow mt-4">
            <Card.Header className="text-center font-weight-bold">Tasks</Card.Header>
            <Card.Body>
                    <Input 
                        type="text"
                        placeholder="Title"
                        value={title}
                        handleOnChange={e => setTitle(e.target.value)}
                    />
                    <Input 
                        type="text"
                        placeholder="Description"
                        value={description}
                        handleOnChange={e => setDescription(e.target.value)}
                />

                <Row className="btn-grp">
                    <Col md={6}>
                        <ButtonCustom
                            className="add shadow-sm py-3 text-uppercase"
                            block="true"
                            variant="success"
                            description="add task"
                            handleOnClick={handleSubmit}
                        />
                    </Col>
                    <Col md={6}>
                        <ButtonCustom
                            className="remove shadow-sm py-3 text-uppercase"
                            block="true"
                            variant="danger"
                            description="delete all tasks"
                        />
                    </Col>
                </Row>
                
                <Input className="mb-0" type="text" placeholder="Search" />
            </Card.Body>
        </Card>
    )
}

export default InputCard
