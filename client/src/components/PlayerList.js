import React from 'react'
import Card from './Card'

//deconstruting, grab props from
const PlayersList = props => {
    console.log(`PlayersList props`,props)
    //destructure
    const{id, name, country}=props.person
    return (
      <div>     

                <Card
                key={id}
                name={name}
                country={country}
                /> 
        </div>
    )
}

export default PlayersList; 