import React from "react";
import Header from "../Shared/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="text-center mt-5">
        <img
        className="img-fluid"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHAwcaJl_jPE170TrvcvzyuF27S0IWk_jJg&usqp=CAU"
          alt="notfound"
        />
        <h2>oops, Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
