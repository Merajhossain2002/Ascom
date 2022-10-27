import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://ascom-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="d-none d-lg-block">
      <h4 className="mt-5">Total Course: {course.length} </h4>
      {course.map((singleCourse) => {
        return (
          <li key={singleCourse.id} className="mt-2">
            <Link
              to={`/singleCourse/${singleCourse.id}`}
              className="text-dark text-decoration-none"
            >
              {singleCourse.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default LeftSide;
