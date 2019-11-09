import React, {Component} from 'react'
import Attributes from './Attributes'

export default class Card extends Component {
   constructor(props){
       super(props)
       this.state = {
           showAttributes: false
       }
   }

    handleClick = (player) => {
        this.setState({
            showAttributes: !this.state.showAttributes
        })
        this.props.changeActiveCard(player)
    }

    displayStuff = () => {
        return <Attributes player={this.props.player}/>
    }

    dotheOtherThing = () => {
        return this.state.showAttributes ? <Attributes player={this.props.player}/> : 'More..'
    }
    render(){
        const {player} = this.props
        return (
            <div className='card' onClick={() => this.props.id ? null : this.handleClick(player)}>
                <h3>{player.name}</h3>
                
                {this.props.id ? this.displayStuff() : this.dotheOtherThing()}
            </div>
        )
    }
}