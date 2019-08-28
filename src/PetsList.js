import React from 'react';

import PetItem from './PetItem';

function PetsList(props) {
  const pets = props.pets;
  return (
    <ul>
      {pets.map(pet => {
        return (
          <PetItem key = {pet.id} id = {pet.id} {...pet} removeNote={props.removeNote}/>
        )
      })}
    </ul>
    
  )
}

export default PetsList