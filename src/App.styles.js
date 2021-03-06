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
  opacity: ${props => props.listOpacity ? 1 : 0};
  transition: opacity .2s ease-in-out;
`

export const PokemonItem = styled.li `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  min-height: 20vh;
  > div {
    /* width: 90px;
    transition: width .2s ease-in-out; */
    img:first-child {
      display: none;
    }
  }
  &:hover {
    cursor: pointer;
    > div {
      /* width: 100px; */
      img:first-child {
        display: block;
      }
      img:last-child {
        display: none;
      }
    }
    img {
      
    }
    h3 {
      text-shadow: 1px 1px 1px #434354; 
    }
  }  
`

export const PokemonImg = styled.img `
  display: block;
  height: 96px;
  width: 96px;
`
export const PokemonName = styled.h3 `
  color: white;
  font-style: normal;
  text-shadow: 1px 1px 1px #4d4b8c; 
  margin-bottom: 0;
`
