import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  const [themeToggle, setThemeToggle] = useState(true);

  const toggle = () => {
    if (!themeToggle) {
      setThemeToggle(themeToggle);
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand
          className="px-2 align-items-center border rounded-pill bg-light"
          href="/"
        >
          <img
            src="favicon.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="logo"
          />
          <span className="pe-1 text-info">Ascom</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Link to={"/home"} className="text-decoration-none text-white me-2">
              Home
            </Link>
            <Link
              to={"/courses"}
              className="text-decoration-none text-white me-2"
            >
              Courses
            </Link>
            <Link to={"/faq"} className="text-decoration-none text-white me-2">
              FAQ
            </Link>
            <Link to={"/blog"} className="text-decoration-none text-white me-2">
              Blog
            </Link>
            {/* -----------------------------------------------------------------
            user login and logout state change toggle. if login then hide login and register btn or if user sign in then show user photo and sign out btn.
             --------------------------------------------------------------------- */}
            {user?.uid ? (
              <>
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        Name : <strong>{placement}</strong>.
                      </Tooltip>
                    }
                  >
                    {user?.photoURL ? (
                      <img
                        className="img-fluid mx-2 user-img rounded"
                        src={`${user?.photoURL}`}
                        alt="user"
                      />
                    ) : (
                      <img
                        className="img-fluid mx-2 user-img rounded"
                        src="https://www.labelprint.co.za/wp-content/uploads/2018/11/user-icon-image-placeholder-300-grey.jpg"
                        alt="user"
                      />
                    )}
                  </OverlayTrigger>
                ))}
                <Button variant="light" size="md" className="me-2 mt-3 mt-lg-0">
                  <Link className="text-decoration-none text-info ">
                    Log Out
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="light" size="md" className="me-2 mt-3 mt-lg-0">
                  <Link
                    to={"/login"}
                    className="text-decoration-none text-info "
                  >
                    Login
                  </Link>
                </Button>
                <Button variant="light" size="md" className="me-2 mt-3 mt-lg-0">
                  <Link
                    to={"/Register"}
                    className="text-decoration-none text-info"
                  >
                    Register
                  </Link>
                </Button>
              </>
            )}
            {/* -------------------------
                    theme toggle btn 
            -----------------------------   */}
            {themeToggle ? (
              <Button
                onClick={toggle}
                variant="light"
                size="md"
                className="text-warning me-2 mt-3 mt-lg-0"
              >
                <FaSun></FaSun>
              </Button>
            ) : (
              <Button
                onClick={toggle}
                variant="dark"
                size="md"
                className="text-warning me-2 mt-3 mt-lg-0"
              >
                <FaMoon></FaMoon>
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
