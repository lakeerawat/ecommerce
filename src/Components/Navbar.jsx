import React ,{Component}  from 'react';
import {Link} from  'react-router-dom';
import logo from '../logo.svg';
import {Buttoncontainer} from './Button.jsx';
import styled from 'styled-components';
class Navbar  extends Component {
    render() { 
        return (
           <Navwrapper className="navbar navbar-expand-sm bg-primary  navbar-dark px-sm-5 ">
               {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
<Link to = '/'>
    <img src ={logo} alt="Store" className="navbar-brand" />
</Link>
<ul className="navbar-nav align-items-cemter ">
<li className="nav-item ml-5">
    <Link to="/" className="nav-link">product</Link>
</li></ul>
<Link to="./Cart" className="ml-auto">
    <Buttoncontainer>
    <span className="mr-2">
        <i className ="fas fa-cart-plus" />
        </span>
        my cart
    </Buttoncontainer>
</Link>
           </Navwrapper>
          );
    }
}
const Navwrapper = styled.nav`

background-color: var(--mainBlue);
}
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize; 
}
`;

 
export default Navbar ;