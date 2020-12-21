import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import { withRouter, Redirect, useHistory, Link } from 'react-router-dom';
import { useState } from 'react';


function FindBooksForm(props) {

  const history = useHistory();

  function handleSettingFilter(event) {
    event.preventDefault();
    props.setCategories(event.target.filter.value);
    history.push("/results");
  };

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
};

FindBooksForm.propTypes = {
  setCategories: PropTypes.func,
};

export default FindBooksForm;