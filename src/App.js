import logo from './logo.svg';
import './App.css';
import Dog from './components/Dog';
import {Switch,Route} from 'react-router-dom';
import Select from './components/Select'
 
import Nav from './components/Nav'
import Random from './components/Random';
import { useState } from 'react';

function App() {
  const [choose,setChoose]=useState('african')
  return (
    <div >
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <Dog setChoose={setChoose}/>
        </Route>
        <Route exact path='/random'>
           <Select choose={choose}/>
        </Route>
        <Route exact path='/breed' component={Random}/>
      </Switch>
    </div>
  );
}

export default App;
