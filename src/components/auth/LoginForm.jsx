import { Box, TextField, Button, Typography, Alert, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

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

  const handleGoogleLogin = () => {
    // TODO: implement Google login logic here
    console.log("Google login clicked");
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
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        maxWidth={420}
        width="100%"
        p={4}
        boxShadow={3}
        borderRadius={3}
        bgcolor="background.paper"
      >
        {/* Title */}
        <Typography variant="h4" mb={1} textAlign="center" fontWeight="bold"
        color="white"
        >
          Welcome Back
        </Typography>
        <Typography variant="body2" mb={3} textAlign="center" color="text.secondary">
          Sign in to continue to Cloud Editor
        </Typography>

        {/* Error message */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {typeof error === "string" ? error : JSON.stringify(error)}
          </Alert>
        )}

        {/* Email */}
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Password */}
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={handleLogin}
          disabled={loading}
          sx={{ mt: 2, py: 1.2, fontWeight: "bold" }}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        {/* Divider */}
        <Divider sx={{ my: 3 }}>OR</Divider>

        {/* Google Sign In */}
        <Button
          variant="outlined"
          fullWidth
          size="large"
          startIcon={<GoogleIcon />}
          onClick={handleGoogleLogin}
          sx={{
            py: 1.2,
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Sign in with Google
        </Button>

        {/* Signup Link */}
        <Typography variant="body2" textAlign="center" color="white" sx={{ mt: 3 }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
