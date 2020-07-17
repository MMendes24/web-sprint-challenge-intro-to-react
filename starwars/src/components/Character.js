// Write your Character component here
import React from 'react';
import styled from 'styled-components'
import Description from './Description'

const Character = props => {
    const { data } = props

const CharacterStyles = styled.div`
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

    return (
        <CharacterStyles>
           <h2>{data.name}</h2>
           <h3>Description</h3>
           {<Description data={data} key={data.id} />}
        </CharacterStyles>
    )
};

export default Character