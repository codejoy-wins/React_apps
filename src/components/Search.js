import React, { Component } from 'react'
import './css/Search.css';

export class Search extends Component {
  render() {
    console.log(this.props);
    console.log(this.props);
    
    const {
    value,
    onChange,
    } = this.props

    return (
        <form id="spot">
        Premature form component: <input
                type="text"
                onChange={onChange}
                value={value}
              />
      </form>
    )
  }
}

export default Search
