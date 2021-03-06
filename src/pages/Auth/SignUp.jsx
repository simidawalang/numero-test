import React from "react";
import Form from "../../components/ui/Form/Form";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import { SmallNav } from "../../components/layout/Navbar/Navbar";

const SignUp = () => {
  return (
    <div className="auth-page">
     <SmallNav authPage/>
      <div className="auth-page__form-container">
        <h3 className="auth-page__header">
          Get your coperate <br /> business account for free
        </h3>
        <Form className="auth-page__form">
          <Input label="Email" type="email" placeholder="tommyodus@gmail.com" />

          <Input
            label="Password (6 characters or more)"
            type="password"
            placeholder="*********"
          />
          <Button variant="purple" content="Sign up" />
        </Form>
      </div>

      <p className="auth-page__text">
        By clicking this, you agree to our Data privacy terms and conditions
      </p>
    </div>
  );
};

export default SignUp;
