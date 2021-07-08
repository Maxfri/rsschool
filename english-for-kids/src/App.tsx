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
import cards from './components/cards/CardsData';

function App() {
  // const gameRoutings = cards[0].map((card) => console.log(card.id));
  const gameRoutings = cards[0].map((card) => <Route path={`/category${card.id}`} key={card.id} render={() => <CategoryPage id={card.id}/>} />);
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/category" component={CategoryPage} /> */}
          {gameRoutings}
          <Route path="/statistics" component={StatisticsPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
