import React, {Component} from 'react'
import './App.css'
import MainContainer from './components/MainContainer';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      teams: []
    }
  }

  // componentDidMount(){
  //   fetch('https://worldcup.sfg.io/teams/')
  //     .then(response => response.json())
  //     .then(res => this.setState({
  //       teams: res.results
  //     }))
  // }

  render(){
    return(
      <div className='App'>
        <h1>Womens World Cup Teams 2019</h1>
        
        <MainContainer teams={this.state.teams}/>
        
      </div>
    )
  }
}
