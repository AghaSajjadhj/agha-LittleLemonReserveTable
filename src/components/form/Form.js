import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RedErrorMessage from "./RedErrorMessage";
import "./form.css";
import { useNavigate } from "react-router-dom";

function FormikForm2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const newValidations = Yup.object({
    date: Yup.date().required("Please select the date"),
    time: Yup.string().required("Please select the time"),
    number: Yup.number().min(1).required("Please fill with number of guests"),
    selectOccasion: Yup.string().required("Please select the occasion"),
  });
  return (
    <div className="reserve_container">
      <Formik
        validationSchema={newValidations}
        initialValues={{
          date: "",
          time: "",
          number: "0",
          selectOccasion: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          setFormData(values);
          navigate("/submitdata");
        }}
      >
        <Form className="reserve_form">
          <h2 className="head_reserve">Reserve a table</h2>
          <label htmlFor="">Select Date:</label> &nbsp;
          <Field type="date" name="date" />
          <RedErrorMessage name="date" /> <br />
          <label htmlFor="">Select Time:</label> &nbsp;
          <Field name="time" as="select">
          <option>00:00</option>
            <option>12:00 pm</option>
            <option>1:00 pm</option>
            <option>2:00 pm</option>
            <option>3:00 pm</option>
            <option>4:00 pm</option>
            <option>5:00 pm</option>
            <option>6:00 pm</option>
            <option>7:00 pm</option>
            <option>8:00 pm</option>
            <option>9:00 pm</option>
            <option>10:00 pm</option>
            <option>11:00 pm</option>
            <option>12:00 am</option>
            <option>1:00 am</option>
            <option>2:00 am</option>
          </Field>
          <RedErrorMessage name="time" />
          <br />
          <label htmlFor=""> Number of Guests:</label>
          <Field type="number" name="number" />
          <RedErrorMessage name="number" /> <br />
          <label htmlFor=""> Select an Occasion:</label>
          <Field name="selectOccasion" as="select">
            <option value="">Select</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>

            <option value="others">Others</option>
          </Field>
          <RedErrorMessage name="selectOccasion" />
          <br />
          <button className="btn2" type="submit">
            Make a Reservation
          </button>
        </Form>
      </Formik>

      {/*For submitted data test  */}

      {/* <div className="reserved_data">
        <h2 className=".head_reserved">
          Congratulation You have reserved your table
        </h2>
        <label htmlFor="">Selected Date:</label> &nbsp; &nbsp;
        {formData.date} <br />
        <label htmlFor="">Selected Time:</label> &nbsp; &nbsp;
        {formData.time} <br />
        <label htmlFor="">Selected Number:</label> &nbsp; &nbsp;
        {formData.number} <br />
        <label htmlFor="">Selected Occasion:</label> &nbsp; &nbsp;
        {formData.selectOccasion}
      </div> */}
    </div>
  );
}

export default FormikForm2;
