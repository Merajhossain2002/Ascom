import React from "react";
import { Button } from "react-bootstrap";
import { FaCrown } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const course = useLoaderData();
  console.log(course);

  const { title, picture, details } = course;
  return (
    <div className="container text-center mt-4">
      <h2 className="border-2 mb-3 border-bottom">{title}</h2>
      <img className="img-fluid border w-75" src={picture} alt="" />
      <p className="text-start mt-3">{details}</p>
      <Button variant="light" className="border-warning border-2 mx-2">
        <Link className="text-decoration-none text-dark" to={"/checkout"}>
          <FaCrown className="me-1" /> Get Premium Access
        </Link>
      </Button>
      <Button variant="light" className="border-info border-2 mx-2">
        Download PDF
      </Button>
    </div>
  );
};

export default SingleCourse;
