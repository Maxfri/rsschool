import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/sidebar/Navbar';
import Footer from './components/footer/footer';
import HomePage from './pages/home/homePage';
import CategoryPage from './pages/category/categoryPage';
import StatisticsPage from './pages/statistics/statisticsPage';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/statistics" component={StatisticsPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
