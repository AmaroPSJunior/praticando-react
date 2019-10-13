import React, { Component } from 'react'
import User from './User.js'
import Foto from './img/foto.jpg'
 
class amaro extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name:'inicial'
    }
    this.mudarEstado = this.mudarEstado.bind(this)
    this.reseta = this.reseta.bind(this)
  }

  mudarEstado (){
    this.setState({
      name: 'alterado'
    });
  }

  reseta (){
    this.setState({
      name: ''
    });
  }

  render(){
    return (
      <div className="amaro">
          Amaro Comment
          <User name='amaro' photo={Foto}></User>

          <div> 
            outro: {this.state.name}
          </div>

          <button onClick={this.mudarEstado}>mudar estado</button>
          <button onClick={this.reseta}>reseta</button> 
      </div>
    );
  }
}

export default amaro;
