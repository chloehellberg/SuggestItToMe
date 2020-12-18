import React from "react";
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';


function FindBooksForm(props){

  return (
    <nav>
      <ul>
        <Link to="/findbooksresult">
          <li>Search for books</li>
        </Link>
      </ul>
    </nav>
  )
}

export default FindBooksForm;
























// import React from "react";
// import PropTypes from 'prop-types';


// function FindBooksForm(props){

//   function handleSearchParameters(event) {
//     event.preventDefault();
//     const newSearch = {
//       query: event.target.query.value
//     }
//     props.onNewSearch(newSearch);
//   }

 
//   return(
//     <React.Fragment>
//       <h1>Here is a form to fill out.</h1>
//       <form onSubmit={handleSearchParameters}>
//         <input class="submission"
//           type='text'
//           name='query'
//           placeholder='Search' />
//         <button class="btn btn-info" type='submit'>New Search</button>
//       </form>
//     </React.Fragment>
//   )
// }

// FindBooksForm.propTypes = {
//   onNewSearch: PropTypes.func
// };

// export default FindBooksForm;









// return(
//   <React.Fragment>
//     <h1>Here is a form to fill out.</h1>
//   </React.Fragment>
// )
// }

// export default FindBooksForm;





// const []
  // function searchParameters() {

  // }










// function FindBooksForm(props){
//   function handleFindBooksSubmission(event) {
//     event.preventDefault();
//     const newBookSearch = {
//       name: event.target.name.value,
//       quantity: event.target.name.value,
//       brand: event.target.brand.value,
//       price: event.target.price.value,
//       style: event.target.style.value,
//       status: event.target.style.value,
//       id: v4()
//     }
//     props.onFindBooksSubmission(newBookSearch);
  
//   }
  
//   return (
//     <React.Fragment>
//       <form onSubmit={handleFindBooksSubmission}>
//         <input class="submission"
//           type='text'
//           name='name'
//           placeholder = 'Name' />
//           <input class="submission"
//           type='text'
//           name='brand' 
//           placeholder = 'Brand'/>
//         <input class="submission"
//           name='price'
//           placeholder='Price per Pint' />
//         <input class="submission"
//           type='text'
//           name="style"
//           placeholder = 'Style'/>
//         <button class="btn btn-info" type='submit'>Find Books</button>
//       </form>
//     </React.Fragment>
//   );
// }

// FindBooksForm.propTypes = {
//   onFindBooksSubmission: PropTypes.func
// };

// export default FindBooksForm;