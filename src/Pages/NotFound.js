import React from "react";
import Button from "./Common/Button";
import maxresdefault from "../images/maxresdefault.jpg";

const NotFound = () => {
  return (
    <div className="h-screen text-center grid justify-center items-center">
      <div>
      <h2 className="text-6xl font-bold">404</h2>
      <span className="text-xl">Opps! Page Not Found</span>
      </div>
    </div>
  );
};

export default NotFound;
