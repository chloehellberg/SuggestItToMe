import React from "react";
import FindBooksForm from "./FindBooksForm";

class FindBooksResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
    };
  }


  makeAPICall = (filter) => {
    console.log('FILTER: ' + filter)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${filter}`) 
    .then((response) => response.json())
    .then((jsonifiedResponse) => (jsonifiedResponse.items))
    .then((jsonifiedResponse) => {
      this.setState({
        isLoaded: true,
        books: jsonifiedResponse,
      });
    })
    .catch((error) => {
    });
  }
  

  render() {
    let { error, books } = this.state;
    console.log("BOOKS", books);

    if (error) {
      return <React.Fragment>Error: {error.message} </ React.Fragment>
    } else {
      return (
        <React.Fragment>
          <FindBooksForm onSubmit={this.makeAPICall} />
          <ul className='center-align'>
            {books !== undefined && books.map((books, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                  
                  <img className="dogPic" src={books.volumeInfo.imageLinks.thumbnail} alt="googleAPIImage" />
                  </div>
                  <li>
                    <div className="flip-card-back">
                      <p>Title: {books.volumeInfo.title}</p>
                      <p>Info: {books.volumeInfo.authors}</p>
                    </div>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default FindBooksResult;