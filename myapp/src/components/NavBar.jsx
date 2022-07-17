import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../resources/roverlogo.png';
import '../App.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark"s>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{''}
            Rover Images
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavBar;