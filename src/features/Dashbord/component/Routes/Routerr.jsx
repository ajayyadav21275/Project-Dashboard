import { Navigate } from "react-router-dom";
import { getToken } from "../session/Session";


function Routerr({ children }) {

  const token = getToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default Routerr;