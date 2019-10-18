import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({ className, text, type, label, placeholder, value, handleOnChange }) => {
    return (
        <Form.Group className={className}>
            {
                label && <Form.Label>{label}</Form.Label>
            }
            <Form.Control value={value} onChange={handleOnChange} type={type} placeholder={placeholder} />
            {
                text && 
                <Form.Text className="text-muted">
                    {text}
                </Form.Text>
            }
        </Form.Group>
    )
}

export default Input
