import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';
import FindBooksResult from './FindBooksResult';
import FindBooksForm from './FindBooksForm';
import PropTypes from 'prop-types';
import * as a from './../actions';

class FindBooksControl extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   query: []
    // };
  }

  // handleSearchParameters = (newSearch) => {
  //   const newQuery = this.state.query.concat(newSearch);
  //   this.setState({
  //     query: newQuery
  //   });
  // }

  handleSearchParameters = (newSearch) => {
    const { dispatch } = this.props;
    const action = a.searchBooks(newSearch);
    dispatch(action);
  }

  handleClick = () => {
    console.log("Handle Click Reached");
    const { dispatch } = this.props;
    const action = a.toggleBookResultsShowing();
    dispatch(action);
    const action2 = a.toggleBookFormShowing();
    dispatch(action2);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.bookResultsShowing) {
      currentlyVisibleState = <FindBooksResult books={this.props.books} onNewSearch={this.handleSearchParameters}/>
      buttonText = "Return to Find Books Form";
    } else {
      currentlyVisibleState = <FindBooksForm />
      buttonText = "Search For Books";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-outline-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

FindBooksControl.propTypes = {
  bookResultsShowing: PropTypes.bool,
  bookFormShowing: PropTypes.bool,
  books: PropTypes.object,
  newSearch: PropTypes.array
}

const mapStateToProps = state => {
  return {
    bookResultsShowing: state.bookResultsShowing,
    bookFormShowing: state.bookFormShowing,
    books: state.books,
    newSearch: state.newSearch
    // books: state.books,
    // isLoading: state.isLoading,
    // error: state.error
  }
}


FindBooksControl = connect(mapStateToProps)(FindBooksControl);


export default FindBooksControl;




































// import React from 'react';
// import FindBooksResult from "./FindBooksResult";
// import FindBooksForm from "./FindBooksForm";

// class FindBooksControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       masterSearchList: [],
//     };
//   }

//   handleFindBooksSubmission = (newBookSearch) => {
//     const newMasterSearchList = this.state.masterSearchList.concat(newBookSearch);
//     this.setState({
//       MasterSearchList: newMasterSearchList,
//       formVisibleOnPage: false
//     });
//   }

//   handleClick = () => {
//     if (this.state.selectedBook != null) {
//       this.setState({
//         formVisibleOnPage: false,
//         selectedBook: null
//       });
//     } else {
//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage,
//       }));
//     }
//   }

//   render(){
//     let currentVisibleState = null;
//     let buttonText = null;
//     if (this.state.formVisibleOnPage) {
//       currentVisibleState = <FindBooksForm onFindBooksSubmission={this.handleFindBooksSubmission} />;
//       buttonText = "Search For Books";
//     } else {
//       currentVisibleState = <FindBooksResult bookList = {this.state.masterSearchList}/>
//       buttonText = 'Return Search For More Books (Another Query)'
//     } 
//     return (
//       <React.Fragment>
//         {currentVisibleState}
//         <button className='btn btn-info' onClick={this.handleClick}>{buttonText}</button>
//       </React.Fragment>
//     );
//   }
// }

// export default FindBooksControl;


