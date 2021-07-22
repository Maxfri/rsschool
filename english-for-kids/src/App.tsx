import React, { useState, useEffect } from 'react';
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

async function getData() {
  return fetch('https://english-for-kids-serve.herokuapp.com/data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => data.json());
}

function App() {
  const [mode, setMode] = useState('train');
  const [token, setToken] = useState();
  const [categories, setCategories] = useState(cards[0]);

  const handleData = async () => {
    const data = await getData();
    setCategories(data[0]);
    console.log(data);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="app-container">
      <Router>
        <Navbar mode={mode} setMode={setMode} token={token} setToken={setToken} />
        <Switch>
          <Route path="/" exact render={() => <HomePage categories={categories} />} />
          <Route path="/category/:id" render={() => <CategoryPage mode={mode} setMode={setMode} />} />
          <Route path="/statistics" render={() => <StatisticsPage />} />
          <Route
            path="/login"
            render={() => {
              if (!token) {
                return <Login setToken={setToken} />;
              }
              return <AdminPage categories={categories} />;
            }}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
