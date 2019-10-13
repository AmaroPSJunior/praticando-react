import React from 'react'
import './App.css'
import {Link, Route} from 'react-router-dom'
import routesConfig from './routesConfig'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Link to='/'>Home</Link>  
      <Link to='/user'>User</Link>  
      </header>

      { routesConfig.map(
          (value, key) => 
          {
            return (
              <Route
                key={key}
                path={value.path}
                component={value.component}
                exact={value.exact}          
                >
              </Route>
            )
          }
        )
      }
      
    </div>
  );
}

export default App;
