import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      kittens: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ kittens: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { kittens, searchField } = this.state;
    const filteredKittens = kittens.filter((kitten) =>
      kitten.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Kittens Garden</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList kittens={filteredKittens} />
      </div>
    );
  }
}

export default App;
