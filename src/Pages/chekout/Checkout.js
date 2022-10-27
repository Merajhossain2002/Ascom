import React from "react";
import { Button } from "react-bootstrap";
import { FaCreditCard, FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const handleCheckout = () => {
    toast.success(
      "🦄 Congratulation,Successfully Purchased, your now ASCOM Learner.",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      }
    );
  };
  return (
    <div>
      <Header></Header>
      <div className="container text-center">
        <div className="shadow mt-5 mx-auto p-3" style={{ width: "50vw" }}>
          <h2 className="text-info">
            <FaCrown /> Get Premium Access of{" "}
            <span className="text-warning">Ascom</span>
          </h2>
          <h4 className="mt-4">$99 /Per Month</h4>
          <Button
            onClick={handleCheckout}
            className=" border-warning border-2 shadow"
            variant="light"
          >
            <FaCreditCard className="me-2" />
            Purchase
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
