import React from "react";
import { ErrorMessage, useField } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SimPhoneInput.css";

const SimPhoneInput = ({ label, notRequired, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <div className="form-group mb-3">
        {label && (
          <label
            htmlFor={field.name}
            style={{ fontSize: 14, fontWeight: "600", marginBottom: 10 }}
          >
            {label} {notRequired ? "" : <span className="text-danger">*</span>}
          </label>
        )}
        <PhoneInput
          {...field}
          {...props}
          inputProps={{
            name: field.name,
            autoComplete: "off",

            className: `form-control form-control-lg ${
              meta.touched && meta.error ? "is-invalid" : ""
            }`,
          }}
          value={field.value}
          onChange={(value) => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          style={{ fontSize: 16, fontWeight: "500" }}
        />

        {meta.touched && meta.error && (
          <div
            className="invalid-feedback"
            style={{ fontSize: 14, marginTop: 10 }}
          >
            {meta.error}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimPhoneInput;
