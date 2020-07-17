import React from 'react'

const CharacterBuilder = (props) => {
    const { lore } = props;

    return (
      <Div>
        {
        CharacterBuilder.map(data => 
        <Character data={lore} key={data.id}  />)
        }
      </Div>
    );
  };
  
  export default Photos