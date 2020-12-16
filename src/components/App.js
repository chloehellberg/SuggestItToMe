import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import FindBooksControl from "./FindBooksControl";


function App() {
  return (
  <React.Fragment>
    <Header />
    <div class = "container">
      <div class="row">
        <div class="col-md-4">
          <FindBooksControl />
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
  );
}

export default App; 