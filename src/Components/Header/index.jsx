import React from 'react'
import { Navbar } from 'react-bootstrap/'

const Header = () => {
    return (
        <Navbar bg="warning" variant="dark" className="d-flex justify-content-center py-3 shadow-sm">
            <Navbar.Brand href="#home">React | To-Do-List</Navbar.Brand>
        </Navbar>
    )
}

export default Header
