import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Header from "../Shared/Header/Header";
import "./login.css";

const Login = () => {
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const { logIn, providerLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // google sign in method
  const handleGoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // github sign in method
  const githubProvider = new GithubAuthProvider();
  const handleGithubSignin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // login method by email and password
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  return (
    <>
      <Header />
      <div className="container ">
        <div className=" row mx-auto justify-content-center pt-5 mt-5 shadow form-box p-3 rounded-3 ">
          <Form onSubmit={handleLogin}>
            <Form.Text className="d-block mb-2">Login With : </Form.Text>
            <Form.Group className="mb-2">
              <Button
                onClick={handleGoogleSignin}
                className="border-2 mb-2 border-dark w-100"
                variant="light"
              >
                <FaGoogle></FaGoogle> Google
              </Button>
              <Button
                onClick={handleGithubSignin}
                className="border-2 border-dark w-100"
                variant="light"
              >
                <FaGithub></FaGithub> Github
              </Button>
            </Form.Group>
            <Form.Text className="d-block mb-2">
              Or Login with E-mail and Password :{" "}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button
              className="border-dark w-100 border-2"
              variant="light"
              type="submit"
            >
              Submit
            </Button>
            <Form.Text className="d-block text-danger mb-2">{error}</Form.Text>
            <Form.Text className="d-block">
              <Link className="text-decoration-none text-dark" to={"/register"}>
                New to Ascom ? Register
              </Link>
            </Form.Text>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
