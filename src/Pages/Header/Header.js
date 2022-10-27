import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const userName = user?.displayName;
  const currentName = [userName];

  // log out btn function
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // theme toggle state and function
  const [themeToggle, setThemeToggle] = useState(true);
  const toggle = () => {
    if (themeToggle) {
      setThemeToggle(!themeToggle);
    } else if (themeToggle !== true) {
      setThemeToggle(!themeToggle);
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
                {currentName.map((name) => (
                  <OverlayTrigger
                    key={name}
                    placement={"bottom"}
                    overlay={
                      <Tooltip id={`${name}`}>
                        Name : <strong>{name}</strong>
                      </Tooltip>
                    }
                  >
                    <img
                      className="img-fluid mx-lg-2 mt-2 mt-lg-0 user-img rounded"
                      src={`${user?.photoURL} || https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`}
                      alt="user"
                    />
                  </OverlayTrigger>
                ))}
                <Button
                  onClick={handleLogout}
                  variant="light"
                  size="md"
                  className="me-2 mt-3 mt-lg-0"
                >
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
                className="text-white me-2 mt-3 mt-lg-0"
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
