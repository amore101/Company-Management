import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserCreation from "./components/UserCreation";
import EmployeeCreation from "./components/EmployeeCreation";
import CompanyList from "./components/CompanyList";
import CompanyInfo from "./components/CompanyInfo";
import CompanyCreation from "./components/CompanyCreation";
import ProjectList from "./components/ProjectList";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import EmployeeList from "./components/EmployeeList";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Welcome} />
        <Route path="/companies" component={CompanyList} />
        <Route path="/company/:id" component={CompanyInfo} />
        <Route path="/addcompany" component={CompanyCreation} />
        <Route path="/users" component={UserList} />
        <Route path="/adduser" component={UserCreation} />
        <Route path="/addemployee/:id" component={EmployeeCreation} />
        <Route path="/projects" component={ProjectList} />
      </div>
    </Router>
  );
}

export default App;
