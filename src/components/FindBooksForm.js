import React from 'react';
import PropTypes from "prop-types";


function FindBooksForm(props){
  return(
    <React.Fragment>
      <div className='align-items-center'>
        <form onSubmit={handleSearchingForMovies}>
          <br></br>
          <input required type='text' name='searchparameter'></input><br></br>
          <button className='btn btn-secondary' type='submit'>Search</button>    
        </form>
      </div>
    </React.Fragment>
  )

  function handleSearchingForMovies(event) {
    event.preventDefault();
    props.onSubmit(event.target.searchparameter.value)
  }
}

FindBooksForm.propTypes = {
  handleSettingSearchParam: PropTypes.func,
}

export default FindBooksForm;
