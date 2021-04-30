import React,{Component}  from 'react';
import Product from './Product.jsx';
import Title from './Title.jsx';
import { ProductConsumer } from '../context.js';

class Productlist extends Component {
   
    render() { 
        
        return (<>
    <div className="py-5">
        <div className="container">
        <Title name ="our" title="products" />
            <div className="row">
          <ProductConsumer>
                { Value => {
                     return ( Value.products.map(product =>{
                         return ( <Product key={product.id} product={product} />);
                     })); 
                     }}
            </ProductConsumer>
            </div>
        </div>
    </div>        
            </>
          );
    }
}
 
export default Productlist;