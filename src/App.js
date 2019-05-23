import React, { useState, useEffect } from 'react';
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


const App = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {

    const getPokemon = async (offset = 20, limit= 20) => {
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
      setPokemon(pokemon)
    }

    getPokemon()

  })


  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Main>
        <PokemonList>
          {
            pokemon.map(({ name, frontImage, backImage }) => (
              <PokemonItem key={name}>
                <div>
                  <PokemonImg src={frontImage} alt="front avatar" />
                  <PokemonImg src={backImage} alt="back avatar"/>
                </div>
                <PokemonName>{capitalize(name)}</PokemonName>
              </PokemonItem>
            ))
          }
        </PokemonList>
      </Main>
    </Container>
  )
}

export default App