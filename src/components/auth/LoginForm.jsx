import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);

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
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default", // dark background from theme
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Box
        maxWidth={400}
        width="100%"
        p={4}
        boxShadow={3}
        borderRadius={2}
        bgcolor="background.paper" // card background from theme
      >
        <Typography variant="h4" mb={3} textAlign="center" color="text.primary">
          Login Form
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {typeof error === "string" ? error : JSON.stringify(error)}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
          sx={{ input: { color: "text.primary" } }}
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
          sx={{ input: { color: "text.primary" } }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          disabled={loading}
          sx={{ mt: 3 }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
