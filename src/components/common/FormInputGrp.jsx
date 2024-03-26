import React, { useState, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

export default function FormInputGrp({
  type,
  placeholder,
  name,
  formdata,
  setFormData,
  shouldValidate=false
}) {

  const [errorMessage, setErrorMessage] = useState("");
  const sendCheckRequest = async (name, value) => {
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append(name, value);

    try {
      // Include urlEncodedData in the axios.post call
      const response = await axios.post(
        "http://localhost:8888/Supply_Chain_Project/api/validation.php",
        urlEncodedData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.duplicate) {
        setErrorMessage("Duplicate Found")
      } else {
        setErrorMessage("")
      }
    } catch (error) {
    //   console.error("Error during API request", error);
    //   setFieldErrors((prevErrors) => ({
    //     ...prevErrors,
    //     [name]: "An error occurred while checking for duplicates.",
    //   }));
    }
  };
  const debouncedCheckRequest = useCallback(
    debounce((name, value) => {
      sendCheckRequest(name, value);
    }, 500),
    []
  ); // Empty dependency array ensures it's created only once
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formdata, [name]: value });

    // Clear the duplicate error message for this specific field
    // setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (shouldValidate) {
      if (value.trim() !== "") {
        // Only perform the duplicate check if the field is not empty
        debouncedCheckRequest(name, value);
      }
    }
  };
  return (
    <>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        // required
        value={formdata[name]}
        onChange={handleChange}
      />
    {errorMessage && <div className="field-error">{errorMessage}</div>}
    </>
  );
}
