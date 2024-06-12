import React, { BaseSyntheticEvent } from 'react';

import WithStore, { userCartItems, CartItems, CartItem } from '@app/backend/stores';

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


    render() {
        console.log(this.props.pStore.CartItems);
        const userCart: JSX.Element[] = [];
        this.props.pStore.CartItems.map((CartItem: CartItem, index: number) => {
            userCart.push(<div key={index}>
                {CartItem.name}
                {CartItem.price}
                
                <button 
                    data-id={CartItem.id} 
                    onClick={this.removeFromCart}>
                    Remove From Cart
                </button>
            </div>);
        })

        return(
            <div>
                {userCart}
                <button onClick={this.clearCart}></button>
            </div>
        )
    }
}

export default WithStore(Cart, userCartItems);