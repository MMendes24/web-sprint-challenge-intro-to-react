import React from 'react';
import styled from 'styled-components'

const Description = props => {
    const { data } = props

const DescriptionStyles = styled.div`
    background-color: black;
    color: gold;
    opacity: 0.8;
`

    return (
        <DescriptionStyles>
           <p>Height: {data.height}</p>
           <p>Mass: {data.mass}</p>
           <p>Hair Color: {data.hair_color}</p>
           <p>Skin Color: {data.skin_color}</p>
           <p>Eye Color: {data.eye_color}</p>
           <p>Birth Year: {data.birth_year}</p>
           <p>Gender: {data.gender}</p>
        </DescriptionStyles>
    )
};

export default Description