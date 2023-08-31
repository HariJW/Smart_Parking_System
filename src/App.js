
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import ParkingStatus from "./components/ParkingStatus";
import Dashboard from "./components/Dashboard";
import ParkVehicle from "./components/ParkVehicle";
import RemoveVehicle from "./components/RemoveVehicle";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/parking-status" element={<ParkingStatus />} />
          <Route path="/park-vehicle" element={<ParkVehicle />} />
          <Route path="/remove-vehicle" element={<RemoveVehicle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
