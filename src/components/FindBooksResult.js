import React from "react";
// import Books from "./Books";
import PropTypes from "prop-types"
// import { useState } from 'react';

function FindBooksResult(props) {
  
  return (

    <React.Fragment>
      <h1>Book Results</h1>
    

      <ul className="center-align">

        {props.books.books.map((books, index) =>
        
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="dogPic" src={books.volumeInfo.imageLinks.smallThumbnail} alt="googleAPIImage" />
              </div>
              <li>
                <div className="flip-card-back">
                  <h3>Title: {books.volumeInfo.title}</h3>
                  <h5>Author: {books.volumeInfo.authors}</h5>
                </div>
              </li>
            </div>
          </div>
        )}

      </ul>
    </React.Fragment>
  );
}

FindBooksResult.propTypes = {
  books: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string
}



export default FindBooksResult;







// function FindBooksResult(props){
//   return(
//     <React.Fragment>
//       {props.bookList.map((books) =>
//         <Books name = {books.name}
//         quantity = {books.quantity}
//         status = {books.status}
//         brand = {books.brand}
//         price = {books.price}
//         style = {books.style}
//         id = {books.id}
//         key = {books.id}/>
//       )}
//     </React.Fragment>
//   );
// }

// FindBooksResult.propTypes = {
//   bookList: PropTypes.array
// };

// export default FindBooksResult;
