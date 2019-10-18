import React from 'react'
import { Header, InputCard, Tasks } from '../../Components'
import { Col, Container, Row } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../../store'

const Main = () => {
    return (
        <Provider store={store}>
            <Container fluid={true} className="main m-0 p-0">
                <Row className="p-0 m-0">
                    <Col md={12} className="p-0">
                        <Header />
                    </Col>

                    <Col md={{ span: 10, offset: 1 }}>
                        <InputCard />
                    </Col>

                    <Tasks />
                </Row>
            </Container>
        </Provider>
    )
}

export default Main
