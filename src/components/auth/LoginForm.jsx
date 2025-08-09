import { useState } from 'react';

const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    console.log("Login data:", formData);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login form</h1>
      <input type="text"
      name="email"
      value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input type="text"
        name="password"
      value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginForm