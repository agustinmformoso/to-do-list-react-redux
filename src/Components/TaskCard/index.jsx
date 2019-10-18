import React from 'react'
import { Card } from 'react-bootstrap'
import { ButtonCustom } from '..'

const TaskCard = ({ className, title, description }) => {
    return (
        <Card className={className}>
            <Card.Body>
                <Card.Title className="border-bottom pb-2">{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <ButtonCustom className="float-right" variant="danger" description="delete"/>
            </Card.Body>
        </Card>
    )
}

export default TaskCard
