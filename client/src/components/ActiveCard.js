import React from 'react'
import Card from './Card'

export default function ActiveCard(props) {
  return (
    <React.Fragment>
      <Card player={props.player} id='active-card'/>
    </React.Fragment>
  )
}