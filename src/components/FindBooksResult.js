import React from "react";
import FindBooksForm from "./FindBooksForm";

class FindBooksResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: [],
      searchparam: null,
      isSubmitted:false
    };
  }
  

  render() {
    let { error, books, searchparam } = this.state;
    console.log("BOOKS", books);
    console.log("SEARCHPARAM", searchparam)
    if (error) {
      return <React.Fragment>Error: {error.message} </ React.Fragment>;
    } else if (books === undefined) {
      return(
        <React.Fragment>
        <h4>No Books Found</h4>
        <button className='btn btn-primary' onClick={this.resetMe}>Back to the search</button>
        </React.Fragment>
      )
    } else {
      console.log(searchparam)
      console.log(this.state)
      return (
        <React.Fragment>
          <FindBooksForm onSubmit={this.handleSettingSearchParam} />
         
          
          <ul className='center-align'>
            {books !== undefined && books.map((books, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                  
                  <img className="dogPic" src={books.volumeInfo.imageLinks.smallThumbnail} alt="googleAPIImage" />
                  </div>
                  <li>
                    <div className="flip-card-back">
                      <h3>Title: {books.volumeInfo.title}</h3>
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
 
  makeOmdbApiCall = (parameter) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${parameter}`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => (jsonifiedResponse.items))
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse)
        this.setState({
          isLoaded: true,
          books: jsonifiedResponse,
          isSubmitted: true
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  };

  handleSettingSearchParam = (param) => {
    console.log('handler' + param)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${param}`) 
    .then((response) => response.json())
    .then((jsonifiedResponse) => (jsonifiedResponse.items))
    .then((jsonifiedResponse) => {
      console.log(jsonifiedResponse)
      this.setState({
        isLoaded: true,
        books: jsonifiedResponse,
        isSubmitted: true
      });
    })
    .catch((error) => {
    });
  }


   resetMe = (state) => {
    this.setState({
      error: null,
      isLoaded: false,
      books: [],
      searchparam: null,
      isSubmitted:false
    })
  } 
}

export default FindBooksResult;