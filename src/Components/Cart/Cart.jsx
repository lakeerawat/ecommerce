import React,{Component}  from 'react';
import { ProductConsumer } from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import Emptycart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
class Cart  extends Component {
    
    render() { 
        return (
          <section>
              <ProductConsumer>
              {value => {
                  const {cart} = value;
                  if (cart.length>0){
                      return(
                      <>
                      <Title name="your" title="cart" />
                      <CartColumns />
                      <CartList value={value} />
                      <CartTotals value={value} />
                      </>
                      )
                  }
                  else{
                   return(   <Emptycart /> )
                  }
              }}

              </ProductConsumer>
          </section>
          );
    }
}
 
export default Cart;