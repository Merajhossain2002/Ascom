import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./login.css";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const { logIn, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((e) => console.error(e));
  };

  return (
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
            <Button className="border-2 border-dark w-100" variant="light">
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
          <Form.Text className="d-block">
            <Link className="text-decoration-none text-dark" to={"/register"}>
              New to Ascom ? Register
            </Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

export default Login;
