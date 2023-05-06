import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function About() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Hello!</h1>
          <p className="mb-8 text-5xl">This is just a practice project..</p>
          <p className="mb-8 text-2xl">By Joseph Ding</p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
