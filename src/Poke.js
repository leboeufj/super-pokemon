import React from 'react'
import HealthBar from './HealthBar'

function Poke(props){
  return(
    <div className="Poke">
      <h2>{ props.name }</h2>
      <div>
        <img src={ props.img } alt={ props.name } />
      </div>
      <div>
        <HealthBar hp={ 25 } max_hp={25}/>
      </div>
    </div>
  )
}

export default Poke;
