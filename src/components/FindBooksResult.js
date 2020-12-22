import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function FindBooksResult(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    makeAPICall();
  },[]);

  const makeAPICall = () => {
    console.log("CALL API", props.categories)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${props.categories}`) 
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      setBooks(jsonifiedResponse.items.slice(0,4));
    })
    .catch((error) => {
    });
  };
  console.log("BOOKS ", books);


  function findOppositeCategories() {

  }

  return(
    <React.Fragment>
      <h1>BookResults</h1>
      <ul className='center-align'>
        {books.map((books, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="bookPic" src={books.volumeInfo.imageLinks.thumbnail} alt="googleAPIImage" />
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
};

FindBooksResult.propTypes = {
  categories: PropTypes.array
};
  
export default FindBooksResult;

