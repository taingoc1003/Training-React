import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between">
          <Nav>
            <Navbar.Brand>
              <NavLink to="/" className="nav-link">
                Training
              </NavLink>
            </Navbar.Brand>
          </Nav>
          <Nav className="nav-menu" activeKey={location.pathname}>
            <NavLink to="/" className="nav-link">
              <i className="fa-solid fa-house header-icon"></i>
            </NavLink>
            <NavLink to="/todo" className="nav-link">
              <i className="fa-solid fa-list-check header-icon"></i>
            </NavLink>
            <NavLink to="/user" className="nav-link">
              <i className="fa-solid fa-users header-icon"></i>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login" className="nav-link">
              Log In
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
