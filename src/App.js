import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from './Components/Navbar';
import Productlist from './Components/Productlist';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Modal from './Components/Modal.jsx';




class App extends Component{
  render(){
    return(<>
     
      <Navbar />
    <Switch>
      
        <Route  path ="/Details" component={Details} />
        <Route  path ="/Cart" component={Cart} />
        <Route exact path ="/" component={Productlist} />
        <Route   component={Default} /> 
        </Switch> 
        <Modal />
       
      </>
      );
  }
}
export default App;
