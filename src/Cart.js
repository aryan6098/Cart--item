import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {
    constructor()
    {
        super();
        this.state = {
            products : [
                {
                    price: 999,
                    title : 'Mobile Phone',
                    qty : 1,
                    img : '',
                    id : 1
                },
                {
                    price: 39999,
                    title : 'Laptop',
                    qty : 1,
                    img : '',
                    id : 2
                },
                {
                    price: 28000,
                    title : 'Telivision',
                    qty : 1,
                    img : '',
                    id : 3
                }
            ]
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
   render() {
       const { products } = this.state;
       return (
        <div className="cart">
            {products.map((products) =>{
                return <CartItem products = {products} key = {products.id}/>
            })}
        
        
        </div>
       );
   }
}


export default Cart;
 