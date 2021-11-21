import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import BagWidget from "./BagWidget" 


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Inicio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Productos" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Palos de Golf</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Guantes</NavDropdown.Item>
                                <NavDropdown.Item href="#action6">Carros</NavDropdown.Item>
                                <NavDropdown.Item href="#action7">Fundas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Otros
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">Preguntas Frecuentes</Nav.Link>
                            <Nav.Link href="#action2">Contacto</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                <BagWidget />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
