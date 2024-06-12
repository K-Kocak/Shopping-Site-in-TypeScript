import React, { BaseSyntheticEvent } from 'react';

import WithStore, { userCartItems, CartItems, CartItem } from '@app/backend/stores';

import '@css/pages/Cart.scss'

interface IProps {
    pStore: CartItems;
}

class Cart extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    removeFromCart = (event: BaseSyntheticEvent) => {
        console.log(event.target);
        const currentCart = this.props.pStore.CartItems;

        const newCart: CartItem[] = [];

        currentCart.map((CartItem: CartItem) => {
            if(event.target.getAttribute("data-id") !== CartItem.id) {
                newCart.push(CartItem);
            }
        });
        
        this.props.pStore.addCartItem(newCart);
    }

    clearCart = () => {
        this.props.pStore.addCartItem([]);
    }
    /*{CartItem.name}
    {CartItem.price}
    {CartItem.quantity}
    
    <button 
        data-id={CartItem.id} 
        onClick={this.removeFromCart}>
        Remove From Cart
    </button>*/

    render() {
        console.log(this.props.pStore.CartItems);
        const userCart: JSX.Element[] = [];
        this.props.pStore.CartItems.map((CartItem: CartItem, index: number) => {
            userCart.push(<div className="Cartitem" key={index}>
                <div className="Cartinfo">
                    {CartItem.name}
                </div>
                <div className="Cartinfo">
                    {CartItem.price}
                </div>
                <div className="Cartinfo">
                    <span><button className="Cartitem_button increase">{'↑'}</button></span>
                    <p>{CartItem.quantity}</p>
                    <span><button className="Cartitem_button decrease">{'↓'}</button></span>
                </div>
            </div>);
        })

        return(
            <div>
                <div>
                    {userCart}
                </div>
                
                <button onClick={this.clearCart}>Empty your cart</button>
            </div>
        )
    }
}

export default WithStore(Cart, userCartItems);