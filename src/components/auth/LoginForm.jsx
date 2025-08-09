import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();


    const { loading, error, successMessage, user } = useSelector((state) => state.auth);

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
    dispatch(loginUser(formData))
    // navigate("/dashboard");

  }

   /* useEffect(() => {
    if (user) {
      navigate("/dashboard"); // adjust path as needed
    }
  }, [user, navigate]); */

  useEffect(() => {
  if (user) {
    navigate("/dashboard");
  }
}, [user, navigate]);

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