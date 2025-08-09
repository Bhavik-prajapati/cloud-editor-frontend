import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm'
import SignupForm from './components/auth/SignupForm'
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';



const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/signup' element={<SignupForm/>}/>
      
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
            <Dashboard/>
            </ProtectedRoute>
          }
          />

    </Routes>
    </BrowserRouter>
  )
}

export default App