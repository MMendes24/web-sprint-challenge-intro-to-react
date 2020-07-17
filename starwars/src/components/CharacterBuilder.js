import React from 'react'
import Character from './Character'

const CharacterBuilder = (props) => {
    const { lore } = props;

    return (
      <div>
        {
        lore.map(lore => 
        <Character data={lore} key={lore.id}  />)
        }
      </div>
    );
  };
  
  export default CharacterBuilder