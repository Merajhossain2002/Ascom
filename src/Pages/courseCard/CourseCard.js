import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = (course) => {
  const { id, title, picture } = course.course;
  return (
    <Col className="mx-auto shadow p-3 rounded-3 mb-5" lg="5" xs="12" sm="12">
      <img
        style={{ height: "200px" }}
        className="img-fluid border rounded mb-2"
        src={picture}
        alt=""
      />
      <p className="fw-semibold">{title}</p>
      <Link
        to={`/singleCourse/${id}`}
        className="btn border shadow-sm"
        variant="light"
      >
        Show Details
      </Link>
    </Col>
  );
};

export default CourseCard;
