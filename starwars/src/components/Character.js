// Write your Character component here
import React from 'react';
import {CharacterStyles} from './GeneralStyles'
import Description from './Description'

const Character = props => {
    const { data } = props


    return (
        <CharacterStyles>
           <h2>{data.name}</h2>
           <h3>Description</h3>
           {<Description data={data} key={data.id} />}
        </CharacterStyles>
    )
};

export default Character