import React, {Component} from 'react'
import CardContainer from './CardContainer'
import ActiveCard from './ActiveCard'

export default class MainContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            player: {},
        }
    }

    changeActiveCard = (player) => {
        this.setState({
            player: player
        })
    } 

    render(){
        return(
            <div className='main-container'>
                <CardContainer changeActiveCard={this.changeActiveCard} players={this.props.players}/>
                {this.state.player.id
                    ? <ActiveCard player={this.state.player}/>
                    : 'No active card'}
            </div>
        )}
}