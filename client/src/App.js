import React, {Component} from 'react'
import './App.css'
import MainContainer from './components/MainContainer';
import axios from 'axios';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({
          players: response.data
        })
      })
      .catch(error => console.log(error))
      
      
  }

  render(){
    return(
      <div className='App'>
        <h1>Womens World Cup Players 2019</h1>
        
        <MainContainer players={this.state.players}/>
        
      </div>
    )
  }
}
