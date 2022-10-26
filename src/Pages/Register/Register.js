import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container ">
      <div className=" row mx-auto justify-content-center py-5 my-5 shadow form-box p-3 rounded-3 ">
        <Form>
          <Form.Text className="d-block mb-2">Sign Up With : </Form.Text>
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
            Or Sign Up with E-mail and password :{" "}
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Your Image</Form.Label>
            <Form.Control type="file" placeholder="Your Full Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
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
