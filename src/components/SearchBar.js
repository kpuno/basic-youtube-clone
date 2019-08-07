import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
  state = {
    searchTerms: ''
  }


  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ searchTerms: e.target.value})
  }

  render() {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    )
  }
}

export default SearchBar;