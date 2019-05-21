import React, { Component } from 'react';
import logo from './pokemon-logo.svg';
import {
  Container,
  Header,
  Logo,
  Main,
  PokemonList,
  PokemonItem,
  PokemonImg,
  PokemonName,
} from './App.styles'

const API_URL = 'https://pokeapi.co/api/v2';

export default class componentName extends Component {

  constructor(props) {
    super(props)
    this.state = {
       pokemon: [],
    }
  }
  
  getPokemon = async (offset = 20, limit= 20) => {
    // get the basic pokemon list (name, url)
    const result = await fetch(`${API_URL}/pokemon/?offset=${offset}0&limit=${limit}`).then(res => res.json())
    const { results } = result 
    // from results create array of promises for each pokemn's details
    const fetchArray = results.reduce((acc, { url }) => {
      acc.push(fetch(url).then(res => res.json()))
      return acc;
    }, [])
    // async fetch all, extract and store in state 
    const pokemonDetails = await Promise.all(fetchArray) // should probably catch errors here
    const pokemon = pokemonDetails.map(({
      name,
      base_experience: experience,
      sprites: {
        front_default: frontImage,
        back_default: backImage,
      },
    }) => {
      return {
        name,
        experience,
        frontImage,
        backImage,
      }
    })
    
    this.setState({ pokemon })
  }

  componentDidMount() {
    this.getPokemon()
  }

  capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

  render() {
    return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>
        <PokemonList>
          {
            this.state.pokemon.map(({ name, frontImage, backImage }) => (
              <PokemonItem key={name}>
                <div>
                  <PokemonImg src={frontImage} alt="front avatar" />
                  <PokemonImg src={backImage} alt="back avatar"/>
                </div>
                <PokemonName>{this.capitalize(name)}</PokemonName>
              </PokemonItem>
            ))
          }
        </PokemonList>
      </Main>
    </Container>
    )
  }
}
