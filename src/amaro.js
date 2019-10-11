import React, { Component } from 'react'
import User from './User.js'
import Foto from './img/foto.jpg'
 
class amaro extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name:'outro nome'
    }

    mudarEstado (){    //<<<<<<<<<<< porque esta dando erro aqui 
      this.setState({
        name: 'nome amaral'
      });
    }
  }

  render(){
    return (
    <div className="amaro">
        Amaro Comment
        <User name='amaro' photo={Foto}></User>

        <div>
          outro: {this.state.name}
        </div>

        <button>mudar estado</button>
    </div>
    );
  }
}

export default amaro;
