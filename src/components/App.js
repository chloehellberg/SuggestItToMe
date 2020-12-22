import React, { useState } from 'react';
import Header from "./Header";
import Footer from './Footer';
import FindBooksResult from "./FindBooksResult";
import FindBooksForm from './FindBooksForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const allCategoriesOffered = ["architecture", "art", "biography", "autobiography", "business & economics", "graphic novels", "computers", "cooking", "design", "drama", "education", "fiction", "history", "poetry", "political science", "science fiction", "mystery", "true crime", "fantasy", "nonfiction"];


function App() {
  const [categories, setCategories] = useState([]);

  const filterAndSetCategories = (categories) => {
    const filteredCategories = allCategoriesOffered.filter(category => !categories.includes(category));
    setCategories(filteredCategories);
  }

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <FindBooksForm filterAndSetCategories={filterAndSetCategories} />
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

