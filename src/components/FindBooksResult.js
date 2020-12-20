import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function FindBooksResult(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    makeAPICall();
  },[]);

  const makeAPICall = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${props.category}`) 
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      // setBooks(jsonifiedResponse.items.slice(0,3));
      setBooks(jsonifiedResponse.items);
    })
    .catch((error) => {
    });
  }
  console.log("BOOKS ", books);

  return(
    <React.Fragment>
      <h1>BookResults</h1>
      <ul className='center-align'>
        {books.map((books, index) => (
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

FindBooksResult.propTypes = {
  category: PropTypes.string
}
  
export default FindBooksResult;


















// import React from "react";
// import FindBooksForm from "./FindBooksForm";

// class FindBooksResult extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       books: []
//     };
//   }


//   makeAPICall = (filter) => {
//     console.log('FILTER: ' + filter)
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${filter}`) 
//     .then((response) => response.json())
//     .then((jsonifiedResponse) => (jsonifiedResponse.items))
//     .then((jsonifiedResponse) => {
//       this.setState({
//         isLoaded: true,
//         books: jsonifiedResponse,
//       });
//     })
//     .catch((error) => {
//     });
//   }
  

//   render() {
//     let { error, books } = this.state;
//     console.log("BOOKS", books);

//     if (error) {
//       return <React.Fragment>Error: {error.message} </ React.Fragment>
//     } else {
//       return (
//         <React.Fragment>
//           <FindBooksForm onSubmit={this.makeAPICall} />
//           <ul className='center-align'>
//             {books !== undefined && books.map((books, index) => (
//               <div key={index} className="flip-card">
//                 <div className="flip-card-inner">
//                   <div className="flip-card-front">
                  
//                   <img className="dogPic" src={books.volumeInfo.imageLinks.thumbnail} alt="googleAPIImage" />
//                   </div>
//                   <li>
//                     <div className="flip-card-back">
//                       <p>Title: {books.volumeInfo.title}</p>
//                       <p>Info: {books.volumeInfo.authors}</p>
//                     </div>
//                   </li>
//                 </div>
//               </div>
//             ))}
//           </ul>
//         </React.Fragment>
//       );
//     }
//   }
// }

// export default FindBooksResult;