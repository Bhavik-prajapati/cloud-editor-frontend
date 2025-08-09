import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Paper,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, message, success, status } = useSelector(
    (state) => state.auth.signup
  );

  console.log(success)
  console.log(status)
  console.log(message)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    dispatch(signupUser(formData));
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  // Optionally redirect on success (if you want)
  // For example redirect to login page after successful signup
  // or you can show a success message here and ask user to login manually
  /*
  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);
  */

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
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 420,
          bgcolor: "background.paper",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" textAlign="center" mb={3} fontWeight="bold">
          Create an Account
        </Typography>

        {/* Google Signup Button */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={handleGoogleSignup}
          sx={{
            mb: 3,
            textTransform: "none",
            borderColor: "grey.400",
          }}
        >
          Sign Up with Google
        </Button>

        <Divider sx={{ mb: 3 }}>OR</Divider>

        {/* Validation warning if status is 400 */}
        {status === 400 && message && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}

        {success && status=== 200 && message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}

        {error && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {error.split(",").map((errMsg, index) => (
            <div key={index}>{errMsg.trim()}</div>
          ))}
        </Alert>
      )}

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
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
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSignup}
          disabled={loading}
          sx={{ mt: 3 }}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </Button>

        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#1976d2", textDecoration: "none" }}>
            Login here
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignupForm;
