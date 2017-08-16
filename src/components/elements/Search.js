import React, {Component} from 'react';
import './Search.css';
//import api from '../../api';
// import PlacesAutocomplete from 'react-places-autocomplete';

// import auth from '../../auth';


//const ENTER = 13;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}

   // console.log(this, "this in search")
  this._handleSearch = this.props._handleSearch.bind(this);
 }

 _handleTyping = (e) => {
    
    if (this.state && this.state.error) {
      this.setState({ 
        error: null 
    })
    }
  }

  search = (e) => {
    e.preventDefault();
    this.props._handleSearch(this.refs.keyword.value)
  }

  render() {


  	return(

        <form className="searchForm">
            <input type="text" 
              ref="keyword" 
              placeholder="your current address" 
              className="search-box-input"
            />
            <button className="search-box-button"
            onClick={this.search}>&#x1f50d;</button>
        </form>
  		)
  }
}
      
// const inputProps = {
//   value: this.state.address || "",
//   onChange: this.onChange,
// }

//onKeyUp={this._handleTyping}