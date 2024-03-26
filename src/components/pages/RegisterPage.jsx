import React, { useState, useCallback } from "react";
import InputGroup from "./InputGroup";
import FormInputGrp from "../common/FormInputGrp";
import "../../css/newcss.css";
import axios from "axios";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
    Address: "",
    Phone: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("FullName", formData.FullName);
    // urlEncodedData.append("Email", formData.Email);
    urlEncodedData.append("Password", formData.Password);
    urlEncodedData.append("Address", formData.Address); // Assuming you have this field in your state
    urlEncodedData.append("Phone", formData.Phone);

    try {
      const response = await axios.post(
        "http://localhost:8888/Supply_Chain_Project/api/register.php",
        urlEncodedData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Reponse:", response); // Add this to log the entire response

      if (response.data.success) {
        console.log("Registration successful!");
        // Redirect or further actions on successful registration
      } else {
        console.error("Error: " + response.data.error);
        // Display error message on the screen
        // For example, you can use state to show the error message
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.error("Caught Error:", error);
      setErrorMessage("An error occurred"); // Set a generic error message
    }
  };

  return (
    <div className="main-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="form-container">
        <div className="form-body">
          <h2 className="title">Register</h2>
          {/* ... social login and other elements ... */}

          <form onSubmit={handleSubmit} className="the-form">
            {/* Full Name Field */}
            <FormInputGrp
              type="text"
              placeholder="Enter your Fullname"
              name="FullName"
              formdata={formData}
              setFormData={setFormData}
              shouldValidate={true}
            />

            <FormInputGrp
              type="text"
              placeholder="Enter your Password"
              name="Password"
              formdata={formData}
              setFormData={setFormData}
            />

            <FormInputGrp
              type="number"
              name="Number"
              placeholder="Enter your Number"
              formdata={formData}
              setFormData={setFormData}
            />

            <FormInputGrp
              type="text"
              name="Address"
              placeholder="Enter your Address"
              formdata={formData}
              setFormData={setFormData}
            />

            <FormInputGrp
              type="text"
              name="Email"
              placeholder="Enter your Email"
              formdata={formData}
              setFormData={setFormData}
              shouldValidate={true}
            />

            <input type="submit" value="Register" />
          </form>
        </div>

        <div className="form-footer">
          <div>
            <span>Already have an account?</span>{" "}
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
