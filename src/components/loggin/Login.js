import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./login.css";
import RedErrorMessage from "../form/RedErrorMessage";
import { useNavigate, Routes, Route } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const newValidations = Yup.object({
    name: Yup.string().required("Please fill the name"),
    pass: Yup.number().required("Password fill the password"),
  });

  return (
    <div className="login-container">
      <Formik
        validationSchema={newValidations}
        initialValues={{
          name: "",
          pass: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          setFormData(values);
          navigate("/submitdata");
        }}
      >
        <Form className="login_form">
          <h3 className="wel">Welcome to Login</h3>
          <label htmlFor="">Name</label> <br />
          <Field className="login" type="name" name="name" />
          <RedErrorMessage name="name" /> <br />
          <label htmlFor="">Password</label>
          <Field className="pass" type="password" name="pass" />
          <RedErrorMessage name="pass" /> <br />
          <button className="btn_sub" type="submit">
            Login
          </button>
        </Form>
      </Formik>
       {/*For submitted data test  */}
{/*        
       <div className="reserved_data">
        <h2 className=".head_reserved">
          Congratulation You have reserved your table
        </h2>
        <label htmlFor="">Entered Name:</label> &nbsp; &nbsp;
        {formData.name} <br />
        <label htmlFor="">Entered Password:</label> &nbsp; &nbsp;
        {formData.pass} <br />
    
      </div> */}
    </div>
  );
}
export default Login;
