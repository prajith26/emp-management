import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EmployeeView from "./pages/EmployeeView";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeView />} />
          {/* <Route path="/employees/add"  component={AddEmployeePage} />
          <Route path="/employees/:id"  component={ViewEmployeePage} />
          <Route path="/employees/:id/edit"  component={UpdateEmployeePage} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
