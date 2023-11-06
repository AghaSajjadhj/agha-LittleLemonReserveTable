import { ErrorMessage } from "formik";
import React from "react";
import { date } from "yup";

function RedErrorMessage({ name }) {
  return (
    <div style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </div>
  );
}

export default RedErrorMessage;
