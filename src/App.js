import React from "react";


import Dashboard from "./Components/Dashboard";
import "./Styles/custom.css";
function App() {
  // Role will later come from backend
  const role = "operator"; // admin | creator | approver
  return <Dashboard role={role} />;
}

export default App;
