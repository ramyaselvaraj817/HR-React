import "./App.css";
import Layout from "./components/Layout/Layout";
import Hiring from "./components/Hiring/Hiring";
import { Route, Routes } from "react-router-dom";
import PayrollBenefits from "./components/Payroll/PayrollBenefits";
import NotFound from "./components/Helper/NotFound";
import { Switch as RouterSwitch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hiring />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/payroll" element={<PayrollBenefits />} />
        <Route path="job-details/1" element={<PayrollBenefits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
