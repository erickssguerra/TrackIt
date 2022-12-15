import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "../context";

import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Today from "../pages/Today";
import Habits from "../pages/Habits";

import GlobalStyle from "../styles/GlobalStyle";
import "reset-css";

export function RouteProvider() {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider  >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Today />} />
        </Routes>
      </AuthProvider >
    </Router>
  );
}
