import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import FindBooksControl from "./FindBooksControl";
// import FindBooksForm from "./FindBooksForm";


function App() {
  return (
  <React.Fragment>
    <Header />
    <div className = "container">
      <div className="row">
        <div className="col-md-4">
          {/* <FindBooksForm/> */}
        </div>
        <div className="col-md-4">
          <FindBooksControl />
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
  );
}

export default App; 