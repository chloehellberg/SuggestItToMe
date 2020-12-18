import React from 'react';
import PropTypes from "prop-types";


function FindBooksForm(props){

  function handleSettingFilter(event) {
    event.preventDefault();
    props.onSubmit(event.target.filter.value)
  }

  return(
    <React.Fragment>
      <div className='align-items-center'>
        <form onSubmit={handleSettingFilter}>
          <br></br>
          <input required type='text' name='filter'></input><br></br>
          <button className='btn btn-secondary' type='submit'>Search</button>    
        </form>
      </div>
    </React.Fragment>
  );
}

FindBooksForm.propTypes = {
  makeAPICall: PropTypes.func,
}

export default FindBooksForm;
