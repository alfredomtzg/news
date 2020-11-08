import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </>
  );
}
