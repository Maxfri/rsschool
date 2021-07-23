import React, { useState } from 'react';
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

function App(): JSX.Element {
  const [mode, setMode] = useState('train');

  return (
    <div className="app-container">
      <Router>
        <Navbar mode={mode} setMode={setMode} />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/category/:id" render={() => <CategoryPage mode={mode} setMode={setMode} />} />
          <Route path="/statistics" render={() => <StatisticsPage />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
