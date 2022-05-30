import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { COUNTRIES } from "../../data/countries";

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">Home</Link>
            {COUNTRIES.map((country) => (
              <>
                <Link key={country.code} to={`/news/${country.code}`} className="nav-link">
                  {country.name}
                </Link>
              </>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
