import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { providerLogin, createUser, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // sign up using google method
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // sign up by github
  const githubProvider = new GithubAuthProvider();
  const handleGithubSignin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // Register method by email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const photoUrl = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container ">
      <div className=" row mx-auto justify-content-center py-5 my-5 shadow form-box p-3 rounded-3 ">
        <Form onSubmit={handleSubmit}>
          <Form.Text className="d-block mb-2">Sign Up With : </Form.Text>
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
            Or Sign Up with E-mail and password :{" "}
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="url" placeholder="Your URL" />
          </Form.Group>
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
            <Link className="text-decoration-none text-dark" to={"/login"}>
              Already have an account ? Login
            </Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

export default Register;
