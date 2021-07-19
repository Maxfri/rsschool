import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/sidebar/Navbar';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import HomePage from './pages/home/homePage';
import CategoryPage from './pages/category/categoryPage';
import StatisticsPage from './pages/statistics/statisticsPage';
import AdminPage from './pages/admin/adminPage';
import cards from './components/cards/CardsData';

function App() {
  const [mode, setMode] = useState('train');
  const [token, setToken] = useState();

  console.log('TOKEN', token);
  return (
    <div className="app-container">
      <Router>
        <Navbar mode={mode} setMode={setMode} />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/category/:id" render={() => <CategoryPage mode={mode} setMode={setMode} />} />
          <Route path="/statistics" render={() => <StatisticsPage />} />
          {/* <Route path="/login" render={() => <Login setToken={setToken} />} /> */}
          <Route
            path="/login"
            render={() => {
              if (!token) {
                return <Login setToken={setToken} />;
              }
              return <AdminPage />;
            }}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
