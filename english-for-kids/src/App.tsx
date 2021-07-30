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
import cardsCategory from './components/cards/cardsCategoryData';

async function getCategoriesData() {
  return fetch('https://english-for-kids-serve.herokuapp.com/categories-data', {
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
  const [categories, setCategories] = useState(cardsCategory);
  const handleData = async () => {
    const categoriesData = await getCategoriesData();
    setCategories(categoriesData);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="app-container">
      <Router>
        <Navbar mode={mode} setMode={setMode} token={token} setToken={setToken} />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/category/:id" render={() => <CategoryPage mode={mode} />} />
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
