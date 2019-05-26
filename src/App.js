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
const API_LIMIT = 20

const App = () => {

  const [data, setData] = useState({});

  const getPokemon = async (url = `${API_URL}/pokemon`) => {
    // get the basic pokemon list (name, url)
    const result = await fetch(url).then(res => res.json())
    const { count, previous, next, results } = result
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
    
    setData({ count, previous, next, pokemon })
  }
  
  useEffect(() => {
    getPokemon()
  }, []); 

  
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)


  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <nav>
          {
            data.previous && <button onClick={() => getPokemon(data.previous)}>previous {API_LIMIT}</button>
          }
          {
            data.next && <button onClick={() => getPokemon(data.next)}>next {API_LIMIT}</button>
          }
        </nav>
      </Header>
      <Main>
        <PokemonList listOpacity={true}>
          {
            data.pokemon && data.pokemon.map(({
                  name,
                  experience,
                  frontImage,
                  backImage
                }) => (
              <PokemonItem key={name} onClick={() => alert(`${capitalize(name)}: Experience ${experience}!`)}>
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