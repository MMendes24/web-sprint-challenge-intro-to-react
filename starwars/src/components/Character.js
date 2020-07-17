// Write your Character component here
import React from 'react';

const Character = props => {
    const { data } = props

    return (
        <div>
           <h2 >{data.name}</h2>
        </div>
    )
};

export default Character