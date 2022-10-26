import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-dark container-fluid bg-light">
      <div className="row align-items-center position-relative">
        {/* col-12 col-md-6 */}
        <div className=" position-absolute text-center">
          <h1 className="text-white">Ascom Tech</h1>
          <p className="text-white">Learn programming online from your home.</p>
          <button className="bg-info p-2 rounded-2 border-0">
            <Link className="text-decoration-none text-white" to={"/courses"}>
              Explore Courses
            </Link>
          </button>
        </div>
        {/* col-md-6 */}
        <div className="col-12">
          <img
            className="img-fluid vw-100 vh-100"
            src="https://img.freepik.com/free-vector/robot-human_53876-91627.jpg?w=740&t=st=1666780013~exp=1666780613~hmac=6f79398c0995c0fb7fc1cde10d26ff6a1087099a45dc45060b6e7d24a2cb9315"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
