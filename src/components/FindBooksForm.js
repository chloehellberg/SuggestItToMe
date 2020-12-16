import React from "react";


function FindBooksForm(props){
  return(
    <React.Fragment>
      <h1>Here is a form to fill out.</h1>
    </React.Fragment>
  )
}

export default FindBooksForm;


























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