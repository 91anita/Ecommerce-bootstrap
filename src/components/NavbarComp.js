import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Store from "./Store";
import Home from "./Home";
import React from "react";

const NavbarComp = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Navbar.Brand href="#home">Ecommerce Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/store">
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Button
              type="button"
              variant="outline-primary"
              class="btn btn-primary"
            >
              Cart <span class="badge bg-secondary">0</span>
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <div class="p-5 mb-2 bg-secondary text-white">
          <h1 class="text-center">The Generics</h1>
        </div>
        <div class="card mx-auto" style={{ width: "50%" }}>
          <div class="row">
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://picsum.photos/200/300"
                  class="card-img-top"
                  alt="..."
                  height={"250px"}
                />
                <div class="card-body mb-4">
                  <h5 class="card-title  text-center">Album 1</h5>
                  <p class="card-text">
                    Rs. 500
                    <Button type="button" class="btn btn-primary">
                      Add to Cart
                    </Button>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://picsum.photos/202/300"
                  class="card-img-top"
                  alt="..."
                  height={"250px"}
                />
                <div class="card-body mb-4">
                  <h5 class="card-title text-center">Album 2</h5>
                  <p class="card-text">
                    Rs. 500
                    <Button type="button" class="btn btn-primary float-end">
                      Add to Cart
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://picsum.photos/204/300"
                  class="card-img-top"
                  alt="..."
                  height={"250px"}
                />
                <div class="card-body mb-4">
                  <h5 class="card-title text-center">Album 3</h5>
                  <p class="card-text">
                    Rs. 500
                    <Button type="button" class="btn btn-primary">
                      Add to Cart
                    </Button>
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://picsum.photos/208/300"
                  class="card-img-top"
                  alt="..."
                  height={"250px"}
                />
                <div class="card-body mb-4">
                  <h5 class="card-title text-center">Album 4</h5>
                  <p class="card-text">
                    Rs. 500
                    <Button type="button" class="btn btn-primary ">
                      Add to Cart
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
export default NavbarComp;
