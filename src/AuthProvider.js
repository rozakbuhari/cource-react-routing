import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [authed, setAuthed] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (!token && location.pathname !== '/auth/login') {
        return history.push('/auth/login');
    }

    if (token && location.pathname === '/auth/login') {
      return history.push('/');
    }

    setAuthed(true);
  }, [history, location.pathname]);

  if (!authed) {
      return <div>Loading...</div>
  }

  return children;
};

export default AuthProvider;
