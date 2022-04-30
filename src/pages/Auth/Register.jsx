import React from "react";
import { SmallNav } from "../../components/layout/Navbar/Navbar";
import Form from "../../components/ui/Form/Form";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-page">
      <SmallNav />
      <div className="auth-page__form-container">
        <h3 className="auth-page__header">
          Director/Business owner <br /> verifications
        </h3>
        <Form className="auth-page__form">
          <Input label="RC Number" type="email" placeholder="Your RC Number" />

          <Input label="BVN" type="text" placeholder="Your BVN" />
          <Input
            label="NIN (National Identification Number)"
            type="text"
            placeholder="Your NIN"
          />
          <Button variant="purple" content="Verify business" />
        </Form>
      </div>
    </div>
  );
};

export default Register;
