import React, { BaseSyntheticEvent } from 'react';

import WithStore, { userCartItems, CartItems, CartItem } from '@app/backend/stores';

import '@css/pages/Cart.scss'
import { contentRoutes } from '@app/constants';
import { router } from '@app/main';

interface IProps {
    pStore: CartItems;
}

class Cart extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    removeFromCartID = (event: BaseSyntheticEvent) => {
        const cartItemID = event.target.parentElement.parentElement.parentElement.getAttribute("data-id");
        const currentCart = this.props.pStore.CartItems;

        const newCart: CartItem[] = [];

        currentCart.map((CartItem: CartItem) => {
            if(cartItemID !== CartItem.id) {
                newCart.push(CartItem);
            }
        });

        this.props.pStore.addCartItem(newCart);
    }

    clearCart = () => {
        this.props.pStore.addCartItem([]);
    }

    checkout = () => {
        router.navigate(contentRoutes.CHECKOUT);
    }

    alterQuantity = (event: BaseSyntheticEvent) => {
        console.log(event.target.parentElement.parentElement.parentElement);

        const cartItemID = event.target.parentElement.parentElement.parentElement.getAttribute("data-id");

        const cartItems = this.props.pStore.CartItems;
        let emptyCartItemChecker = -1;
        
        cartItems.map((CartItem: CartItem, index: number) => {
            if(CartItem.id === cartItemID) {
                event.target.value == "increase" ? CartItem.quantity++ : CartItem.quantity--; 
                if(CartItem.quantity == 0) {
                    emptyCartItemChecker = index;
                }         
            }
        });

        this.props.pStore.addCartItem(cartItems);
        
        if(emptyCartItemChecker !== -1) {
            this.removeFromCartID(event);
        }

    }

    render() {
        console.log(this.props.pStore.CartItems);
        const userCart: JSX.Element[] = [];
        this.props.pStore.CartItems.map((CartItem: CartItem, index: number) => {
            userCart.push(<div data-id={CartItem.id} className="Cartitem" key={index}>
                <div className="Cartinfo itemname">
                    <p>{CartItem.name}</p>
                </div>
                <div className="Cartinfo itemprice">
                    <p>£{CartItem.price*CartItem.quantity}</p>
                </div>
                <div className="Cartinfo itemdescription">
                    <p style={{
                        fontSize: 16,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: 150,
                        height: 100
                    }}>{CartItem.description}</p>
                </div>
                <div  className="Cartinfo itemquantity">
                    <span><button className="Cartitem_button increase" onClick={this.alterQuantity} value="increase">{'↑'}</button></span>
                    <p>{CartItem.quantity}</p>
                    <span><button className="Cartitem_button decrease" onClick={this.alterQuantity} value="decrease">{'↓'}</button></span>
                </div>
                <div className="Cartinfo removeitem">
                    <span><button className="Cartitem_button delete" onClick={this.removeFromCartID}>Remove From Cart</button></span>
                    
                </div>
            </div>);
        })

        return(
            <div>
                <div>
                    {userCart}
                </div>
                
                <button onClick={this.clearCart}>Empty your cart</button>
                <span><button onClick={this.checkout}className="Cartitem_button checkout">Proceed to checkout</button></span>
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(Cart, userCartItems);