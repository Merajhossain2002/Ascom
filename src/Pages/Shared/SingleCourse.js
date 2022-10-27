import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { FaCrown, FaFilePdf } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const SingleCourse = () => {
  const course = useLoaderData();
  const { id, title, picture, details } = course;
  const componentRef = useRef();

  const handleDownload = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="container text-center mt-4">
      <Button
        onClick={handleDownload}
        variant="light"
        className="w-100 shadow-sm mb-2 border-2 mx-2"
      >
        <FaFilePdf className="me-2" />
        Download PDF or Print
      </Button>
      <div className="text-center p-2" ref={componentRef}>
        <h2 className="border-2 mb-3 border-bottom">{title}</h2>
        <img className="img-fluid border w-75" src={picture} alt="" />
        <p className="text-start mt-3">{details}</p>
      </div>
      <Button
        variant="light"
        className="border-warning border-2 mb-3 w-100 mx-2"
      >
        <Link className="text-decoration-none text-dark" to={`/checkout/${id}`}>
          <FaCrown className="me-1" /> Get Premium Access
        </Link>
      </Button>
    </div>
  );
};

export default SingleCourse;
