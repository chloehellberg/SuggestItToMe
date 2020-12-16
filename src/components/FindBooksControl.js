import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class FindBooksControl extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, books } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Books</h1>
          <ul>
            {books.map((book, index) =>
              <li key={index}>
                <h3>{book.title}</h3>
                <p>{book.abstract}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(FindBooksControl);







































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


