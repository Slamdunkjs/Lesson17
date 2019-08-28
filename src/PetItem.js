import React from 'react';

function PetItem(props) {
  return (
    <li>
      <div className="float-right">{props.date} {props.time}</div>
      
      <h3>
        <span>{props.name}</span> 
        <button onClick={()=> { props.removeNote(props.id) }} className="btn btn-danger btn-sm">Удалить</button>
      </h3>
      <h5>{props.owner}</h5>
      <p>{props.content}</p>
    </li>
  )
}

export default PetItem