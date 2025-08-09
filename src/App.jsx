import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm'
import SignupForm from './components/auth/SignupForm'
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
   palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // light blue
    },
    background: {
      default: "#121212", // dark background
      paper: "#1e1e1e",   // card background
    },
  },
});


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
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