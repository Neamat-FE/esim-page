import { useField, ErrorMessage } from "formik";

const TextInput = ({ label, notRequired, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group mb-3">
      {label && (
        <label
          htmlFor={field.name}
          style={{ fontSize: 14, fontWeight: "600", marginBottom: 10 }}
        >
          {label} {notRequired ? "" : <span className="text-danger">*</span>}
        </label>
      )}

      <input
        {...field}
        {...props}
        className={`form-control form-control-lg ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
        autoComplete="off"
        style={{ fontSize: 16, fontWeight: "500" }}
      />

      <ErrorMessage
        name={field.name}
        component="div"
        className="invalid-feedback"
        style={{ fontSize: 14, marginTop: 10, fontWeight: "semibold" }}
      />
    </div>
  );
};

export default TextInput;
