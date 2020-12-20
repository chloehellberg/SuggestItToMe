import React, { useState } from 'react';
import Header from "./Header";
import Footer from './Footer';
import FindBooksResult from "./FindBooksResult";
import FindBooksForm from './FindBooksForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [category, setCategory] = useState('');
  // const [checkboxValues, setCheckboxValues] = useState('');

  console.log('CATEGORY:', category);

  return (
    <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <FindBooksForm setCategory={setCategory} />
            {/* <FindBooksForm setcheckboxValues={setCheckboxValues} /> */}
          </Route>
          <Route path="/results">
            <FindBooksResult category={category} />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;