import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm'
import SignupForm from './components/auth/SignupForm'
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Landing from './Pages/Landing';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // light blue
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // rounded corners
          textTransform: "none", // disable uppercase
          fontWeight: "bold",
          padding: "10px 20px",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          backgroundColor: "#90caf9",
          color: "#000",
          "&:hover": {
            backgroundColor: "#64b5f6",
            boxShadow: "0 0 10px rgba(144, 202, 249, 0.6)",
          },
        },
        outlinedPrimary: {
          borderColor: "#90caf9",
          color: "#90caf9",
          "&:hover": {
            borderColor: "#64b5f6",
            backgroundColor: "rgba(144, 202, 249, 0.08)",
          },
        },
      },
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App