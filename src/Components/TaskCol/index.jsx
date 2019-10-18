import React from 'react'
import { TaskCard } from '../'
import { Card, Col } from 'react-bootstrap'

const TaskCol = ({ title, cards }) => {
    return (
        <Col md={4}>
            <Card className="mt-4 shadow ">
                <Card.Header className="text-center text-uppercase font-weight-bold">{title}</Card.Header>
                <Card.Body>
                    {
                        cards ?
                        cards.map((card) =>
                            <TaskCard key={card.id} description={card.description} title={card.title} className={`shadow-sm mb-3 ${card.classname}`}/>
                        ) : null
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default TaskCol
