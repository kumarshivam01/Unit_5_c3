import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/employees" element={<EmployeeList/>} />
      <Route path="/employeedetails/:id" element={<EmployeeDetails />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
