import React from 'react'
import Card from './Card'

export default function ActiveCard(props) {
  return (
    <React.Fragment>
      <Card teams={props.teams} id='active-card'/>
    </React.Fragment>
  )
}