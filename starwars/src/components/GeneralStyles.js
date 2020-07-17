import styled from 'styled-components'

const AppStyle = styled.div`
  font-family: helvetica;
  border: 5px solid gold;
  width: 80%;
  margin: 2% 10%;
`

export const CharacterStyles = styled.div`
background-color: black;
color: gold;
opacity: 0.8;
display: flex;
flex-direction: column;
align-items: center;

h2 {
    font-size:2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 2% 0%;
}

h3 {
    font-size:1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 1% 0%;
}
`

export const DescriptionStyles = styled.div`
    background-color: black;
    color: gold;
    opacity: 0.8;

    span {
        font-size: 1.5rem;
    }

    p {
        font-size: 1.2rem;
        font-style: italic;
        margin: 2% 0%;
    }

`

export default AppStyle