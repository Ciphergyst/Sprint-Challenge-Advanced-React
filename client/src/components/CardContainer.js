import React from "react";
import Card from './Card'


export default function CardContainer(props) {

    const players = props.players.map(player => {
        return <Card changeActiveCard={props.changeActiveCard} player={player} key={player.id}/>
    })
    return (
        <div className="card-container">
            {players}
        </div>
    )
}