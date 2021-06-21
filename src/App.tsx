
import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import NavBar from './Components/NavBar';
import "./GlobalStyles.css"
import { myContext } from './Context'
function App() {
  const userObject = useContext(myContext);
  console.log(userObject);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        {
          userObject ? null : (
            <Route path='/login' component={LoginPage} />
          )
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;