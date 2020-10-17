import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className='App'>
        <div id='page-body'>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/article/:name'>
              <ArticlePage />
            </Route>
            <Route path='/articles-list'>
              <ArticlesList />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
