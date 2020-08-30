import React, {Component} from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Features from './component/Features';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import { Route, Switch } from 'react-router-dom';

class App extends Component{
 render(){
  return(
    <div>
  <Navbar />
     <Switch>
         <Route exact path='/' render={() => <Home />} />
         <Route path='/features' render={() => <Features />} />
         <Route path='/pricing' render={() => <Pricing />} />
         <Route path='/contact' render={() => <Contact />} />
      </Switch>
   </div>
   ) 
  }
}

export default App;
