import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import PageHome from "../../pages/home/home";
import PageCategory from "../../pages/category/category";
import PageStatistics from "../../pages/statistics/statistics";
import './sidebar.css'

export default function Sidebar() {
  return (
       
    <Router>
        <div className="sidebar-sticky"></div>
        <nav className="col-md-12 d-none d-md-block bg-light sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/category">
            <PageCategory />
          </Route>
          <Route path="/statistics">
            <PageStatistics />
          </Route>
          <Route path="/">
            <PageHome />
          </Route>
        </Switch>
    </Router>
  )
} 