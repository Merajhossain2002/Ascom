import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CourseCard from "../courseCard/CourseCard";

const Course = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://ascom-server.vercel.app/courses")
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
              ></CourseCard>
            );
          })}
        </Row>
      </Container>
      <div></div>
    </div>
  );
};

export default Course;
