import React from 'react';
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { allCategoriesOffered } from './App';

function FindBooksForm(props){

  const history = useHistory();   
  
  const [localCategories, setLocalCategories] = useState([]);


  function handleChange(event) {
    setLocalCategories([...localCategories, event.target.name])
  };

  function handleSettingFilterForAPI(event) {
    event.preventDefault();
    props.filterAndSetCategories(localCategories)
    history.push('/results');
  };

  
  return(
    <React.Fragment>
      <div className="form-questions">
      <img className="book-stacks" src="https://data.whicdn.com/images/40127583/original.jpg" alt="stackOfBooks"/>
      <h4>check genres that you typically read...</h4>
      <form className="categories" onSubmit={handleSettingFilterForAPI}>
        <FormGroup>
          {allCategoriesOffered.map((category, index) => {
            return <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={localCategories[category]}
                  type="checkbox"
                  onChange={handleChange}
                  name={category} />
              }
              label={category}
            /> 
          })}
          <button className='btn' type='submit'>find books</button>
        </FormGroup>
      </form>
      </div>
    </React.Fragment>
  );
};

FindBooksForm.propTypes = {
  filterAndSetCategories: PropTypes.func
};

export default FindBooksForm;