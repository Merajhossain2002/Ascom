import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CourseCard from "../courseCard/CourseCard";

const Course = () => {
  const [course, setCourse] = useState([]);
  console.log(course);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div>
      <h4 className="text-center mt-3">Available Course For Programming</h4>
      <hr />
      <Container>
        <Row>
          {course.map((singleCourse) => {
            return (
              <CourseCard
                key={singleCourse.id}
                course={singleCourse}
                className="mt-2"
              >
                <Link
                  to={"/singleCourse"}
                  className="text-dark text-decoration-none"
                >
                  {singleCourse.title}
                </Link>
              </CourseCard>
            );
          })}
        </Row>
      </Container>
      <div></div>
    </div>
  );
};

export default Course;
