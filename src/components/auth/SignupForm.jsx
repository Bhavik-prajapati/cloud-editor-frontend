import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux"; 
import { signupUser } from "../../features/auth/authSlice"; 
import e from "cors";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle signup click
  const handleSignup = () => {
    console.log("Signup data:", formData);
    dispatch(signupUser(formData))
    
  };
  const dispatch=useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.auth);



  return (
    <div style={{ padding: "20px" }}>
      <h1>Signup Form</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSignup} disabled={loading}>
        {loading ? "Signing up..." : "Sign Up"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default SignupForm;
