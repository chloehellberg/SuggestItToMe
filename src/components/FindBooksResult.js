import React from "react";
import Books from "./Books";
import PropTypes from "prop-types"



function FindBooksResult(props){
  return(
    <React.Fragment>
      {props.bookList.map((books) =>
        <Books name = {books.name}
        quantity = {books.quantity}
        status = {books.status}
        brand = {books.brand}
        price = {books.price}
        style = {books.style}
        id = {books.id}
        key = {books.id}/>
      )}
    </React.Fragment>
  );
}

FindBooksResult.propTypes = {
  bookList: PropTypes.array
};

export default FindBooksResult;