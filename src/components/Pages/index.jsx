import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HoverCentral from "../HoverCentral";
import TableCentral from "../TableCentral";
import {
  CepContext,
  CepProvider,
  LojasProvider,
} from "../../services/provider";

const Pages = () => {
  const Private = ({ children }) => {
    const { cepValido } = useContext(CepContext);
    if (!cepValido) {
      return <Navigate to="/" />;
    } else return children;
  };
  return (
    <Router>
      <CepProvider>
        <Routes>
          <Route exact path="/" element={<HoverCentral />} />
          <Route
            path="/prod"
            element={
              <Private>
                <LojasProvider>
                  <TableCentral />
                </LojasProvider>
              </Private>
            }
          />
        </Routes>
      </CepProvider>
    </Router>
  );
};

export default Pages;
