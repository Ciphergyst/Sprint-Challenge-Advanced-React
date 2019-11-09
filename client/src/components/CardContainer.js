import React from "react";


export default function CardContainer(props) {

    const teams = props.teams.map(teams => {
        return <card changeActiveCard={props.changeActiveCard} teams={teams} key={teams.id}/>
    })
    return (
        <div className="card-container">
            {teams}
        </div>
    )
}