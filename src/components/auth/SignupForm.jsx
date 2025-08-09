import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../features/auth/authSlice";

import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Paper,
} from "@mui/material";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.auth);

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

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" mb={3} textAlign="center">
          Sign Up
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {typeof error === "string" ? error : JSON.stringify(error)}
          </Alert>
        )}
        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
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
      </Paper>
    </Box>
  );
};

export default SignupForm;
