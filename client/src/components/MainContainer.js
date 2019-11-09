import React, {Component} from 'react'
import CardContainer from './CardContainer'
import ActiveCard from './ActiveCard'

export default class MainContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            teams: {},
        }
    }

    changeActiveCard = (teams) => {
        this.setState({
            teams: teams
        })
    } 

    render(){
        return(
            <div className='main-container'>
                <CardContainer changeActiveCard={this.changeActiveCard} teams={this.props.teams}/>
                {this.state.teams.id
                    ? <ActiveCard teams={this.state.teams}/>
                    : 'No active card'}
            </div>
        )}
}