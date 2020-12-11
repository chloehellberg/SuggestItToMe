import React from 'react';
import FindBooksResult from "./FindBooksResult";
import FindBooksForm from "./FindBooksForm";

class FindBooksControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSearchList: [],
    };
  }

  handleFindBooksSubmission = (newBookSearch) => {
    const newMasterSearchList = this.state.masterSearchList.concat(newBookSearch);
    this.setState({
      MasterSearchList: newMasterSearchList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.selectedBook != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBook: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render(){
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleState = <FindBooksForm onFindBooksSubmission={this.handleFindBooksSubmission} />;
      buttonText = "Search For Books";
    } else {
      currentVisibleState = <FindBooksResult bookList = {this.state.masterSearchList}/>
      buttonText = 'Return Search For More Books (Another Query)'
    } 
    return (
      <React.Fragment>
        {currentVisibleState}
        <button className='btn btn-info' onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default FindBooksControl;


