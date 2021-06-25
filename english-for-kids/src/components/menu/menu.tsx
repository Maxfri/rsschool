import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageHome from "../../pages/home/home";
import PageCategory from "../../pages/category/category";
import PageStatistics from "../../pages/statistics/statistics";

export default function SideMenu() {
  return (
    <Router>
      <>
        <nav>
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
      </>
    </Router>
  )
} 