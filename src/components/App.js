import React from 'react';
import Header from "./Header";
import Footer from './Footer';
// import FindBooksControl from "./FindBooksControl";
import FindBooksForm from './FindBooksForm';
import FindBooksResult from './FindBooksResult';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={FindBooksForm} />
          <Route path="/findbooksresult" component={FindBooksResult} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
















// import React from 'react';
// import Header from "./Header";
// import Footer from './Footer';
// import FindBooksControl from "./FindBooksControl";



// function App() {
//   return (
//   <React.Fragment>
//     <Header />
//     <FindBooksControl />
//     <Footer />
//   </React.Fragment>
//   );
// }

// export default App; 

