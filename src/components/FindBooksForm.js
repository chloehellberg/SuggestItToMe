import React from 'react';
import PropTypes from "prop-types";
// import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function FindBooksForm(props){

  const history = useHistory();   
  
  const [localCategories, setLocalCategories] = useState([]);

  function handleChange(event) {
    setLocalCategories([...localCategories, event.target.name])
  };

  function handleSettingFilterForAPI(event) {
    event.preventDefault();
    props.setCategories(localCategories)
    history.push('/results');
  };

  console.log('LOCAL CATEGORIES', localCategories);
  
  return(
    <React.Fragment>
      <div className="form-questions">
      <h5>Check genres that you typically read</h5>
      <form class="categories" onSubmit={handleSettingFilterForAPI}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={localCategories.mystery}
                type="checkbox"
                onChange={handleChange}
                name="mystery" />
            }
            label="mystery"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={localCategories.fiction}
                type="checkbox"
                onChange={handleChange}
                name="fiction" />
            }
            label="fiction"
          />
          <button className='btn' type='submit'>find books</button>
        </FormGroup>
      </form>
      </div>
    </React.Fragment>
  );
};

FindBooksForm.propTypes = {
  setCategories: PropTypes.func
};

export default FindBooksForm;












//OLD CODE THAT SEARCHES BY 1 FORM INPUT
// import React from 'react';
// import PropTypes from "prop-types";
// import ReactDOM from 'react-dom';
// import { withRouter, Redirect, useHistory, Link } from 'react-router-dom';
// import { useState } from 'react';


// function FindBooksForm(props) {

//   const history = useHistory();

//   function handleSettingFilter(event) {
//     event.preventDefault();
//     props.setCategories(event.target.filter.value);
//     history.push("/results");
//   };

//   return(
//     <React.Fragment>
//       <div className='align-items-center'>
//         <form onSubmit={handleSettingFilter}>
//           <br></br>
//           <input required type='text' name='filter'></input><br></br>
//           <button className='btn btn-secondary' type='submit'>Search</button>    
//         </form>
//       </div>
//     </React.Fragment>
//   );
// };

// FindBooksForm.propTypes = {
//   setCategories: PropTypes.func,
// };

// export default FindBooksForm;