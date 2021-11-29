import {
    Navbar,
    Container,
    Nav,
    InputGroup,
    FormControl,
    Button,Spinner,
  } from "react-bootstrap";
  <Spinner animation="border" />
  const CustomAppBar = ({ label, onSearch }) => {
    return (
      <Navbar bg="secondary" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <img src="../logo.svg" alt="logo" height={70} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search on Youtube"
                aria-label="search on youtube"
                aria-describedby="basic-addon2"
                onChange={onSearch}
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
              <Button variant="outline-light" href="/license">
                License
              </Button>
              
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    );
  };

/* <Spinner animation="center" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> */
  export default CustomAppBar;