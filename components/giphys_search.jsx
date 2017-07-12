import React from 'react';

import GiphysIndex from './giphys_index';


class GiphysSearch {

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange(e) {
    e.preventDefault();
    let change = e.target.value;
    this.setState({search: change});
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search.split(' ').join('+')
    this.props.fetchSearchGiphys(search).then(
      () => this.setState({
        search: ""
      })
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Search Field</label>
        <input> onChange={this.handleChange}</input>
      </form>
    );

  }
}
