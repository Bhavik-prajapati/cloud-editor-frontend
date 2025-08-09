const PublicRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};