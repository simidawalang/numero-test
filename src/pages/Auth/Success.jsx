import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/ui/Form/Form";
import successImg from "../../assets/images/success.png";
import Button from "../../components/ui/Button/Button";

const Success = () => {
  return (
    <div className="auth-page">
      <nav className="auth-page__navbar">
        <a href="/">numero</a>
        <Link to="/auth/register">timi@gmail.com</Link>
      </nav>
      <div className="auth-page__form-container">
        <Form className="auth-page__form">
          <div className="auth-page__success-img">
            <img
              src={successImg}
              alt="Successfully registered business"
              height={145}
            />
          </div>
          <h3 className="auth-page__header">Great Job! set up your business</h3>
          <p className="auth-page__success-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem
            ipsum dolor sit amet, consectetur{" "}
          </p>
          <Button variant="purple" content="Activate your business" />
        </Form>
        <p className="auth-page__text">
          <Link to="/">Skip to Dashboard</Link>
        </p>
      </div>
    </div>
  );
};

export default Success;
