import styled from 'styled-components'

export const Container = styled.div`
  /* height: 100%; */
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 3rem 0; 
`

export const Main = styled.main `
  width: 90%;
  margin: 0 auto;
`

export const Logo = styled.img``

export const PokemonList = styled.ul `
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PokemonItem = styled.li `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  min-height: 20vh;
  &:hover {
    cursor: pointer;
    img {
      width: 100px;
    }
    h3 {
      text-shadow: 1px 1px 1px #434354; 
    }
  }  
`

export const PokemonImg = styled.img `
  width: 80px;
   transition: width .2s ease-in-out;
`
export const PokemonName = styled.h3 `
  color: white;
  font-style: normal;
  text-shadow: 1px 1px 1px #4d4b8c; 
`
