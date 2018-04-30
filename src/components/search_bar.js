import React, {Component} from 'react';

//functional component:
// const SearchBar = () => {
//   return <input/>;
// };

//class based component:

//class components have their own 'state' object.
//when state changes, the component rerenders, and so
// do it's children
class SearchBar extends Component {
  //this function is called automatically:
  //doing setup inside class, initializing the state etc.
  constructor(props) {
    super(props);
    //inside constructor is the ONLY place
    //we set this.state directly.  everywhere else
    //we use this.setState method
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
        placeholder="search"
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
