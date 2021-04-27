import React from 'react'
import './HealthBar.css'

function HealthBar(props){
  return(
  <div className="HealthBar">
    <div className="currentHealth" style={ {width: (props.hp/props.max_hp) * 100 + '%' } } >
    <h3>Health: {props.hp} / {props.max_hp}</h3>
    </div>
  </div>
  )
}

export default HealthBar