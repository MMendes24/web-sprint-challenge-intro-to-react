import React from 'react';
import {DescriptionStyles} from './GeneralStyles'


const Description = props => {
    const { data } = props

    return (
        <DescriptionStyles>
            <p><span>Height: </span>{data.height}</p>
            <p><span>Mass: </span>{data.mass}</p>
            <p><span>Hair Color: </span>{data.hair_color}</p>
            <p><span>Skin Color: </span>{data.skin_color}</p>
            <p><span>Eye Color: </span>{data.eye_color}</p>
            <p><span>Birth Year: </span>{data.birth_year}</p>
            <p><span>Gender: </span>{data.gender}</p>
        </DescriptionStyles>
    )
};

export default Description