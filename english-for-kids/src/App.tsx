import React from 'react';
// import Sidebar from './components/sidebar/sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Navbar from './components/sidebar/Navbar';
import Footer from './components/footer/footer';
import PageHome from './pages/home/home';
import PageCategory from './pages/category/category';
import PageStatistics from './pages/statistics/statistics';

function App(): JSX.Element {
  return (
    <div className="container">
      <h1>English for kids</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PageHome} />
          <Route path="/category" component={PageCategory} />
          <Route path="/category" component={PageStatistics} />
        </Switch>
      </Router>

      {/* <Sidebar /> */}
      <Footer />
    </div>
  );
}

export default App();
