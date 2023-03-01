import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle.styled';
import PokemonForm from './PokemonForm/PokemonForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from './PokemonInfo/PokemonInfo';

class App extends Component {
  state = {
    pokemonName: '',
  };
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  // componentDidMount() {
  //   this.setState({ loading: true });
  //   fetch('http://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemons => this.setState({ pokemons }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {/* {this.state.pokemons && <div>pekemon</div>} */}
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </div>
    );
  }
}
export default App;
