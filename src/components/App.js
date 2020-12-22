import React, { useState } from 'react';
import Header from "./Header";
import Footer from './Footer';
import FindBooksResult from "./FindBooksResult";
import FindBooksForm from './FindBooksForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [categories, setCategories] = useState([]);

  console.log('CATEGORIES', categories);

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <FindBooksForm setCategories={setCategories} />
          </Route>
          <Route path="/results">
            <FindBooksResult categories={categories} />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
};

export default App;

