import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/sidebar/Navbar';
import Footer from './components/footer/footer';
import PageHome from './pages/home/home';
import PageCategory from './pages/category/category';
import PageStatistics from './pages/statistics/statistics';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PageHome} />
          <Route path="/category" component={PageCategory} />
          <Route path="/statistics" component={PageStatistics} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
