import React, { BaseSyntheticEvent } from 'react';

import { v4 as uuidv4 } from 'uuid';

import BrowserItemList, { BrowserItem } from '@app/backend/BrowserItem';
import {userCartItems, CartItem, CartItems} from '@app/backend/stores'
import WithStore from '@app/backend/stores';

interface IProps {
    pStore: CartItems
}

class BrowserList extends React.Component<IProps, never> {
    constructor(props: IProps){
        super(props);
    }

    addToCart = (event: BaseSyntheticEvent) => {
        const name = event.target.getAttribute('data-name');
        const price = event.target.getAttribute('data-price');
        const description = event.target.getAttribute('data-description');
        const id = uuidv4();
        const itemToAdd: CartItem = 
        {name, price, description, quantity: 1, id};

        const currentCartItems = this.props.pStore.CartItems;
        let duplicateItemTracker = -1;
        
        currentCartItems.forEach((CartItem: CartItem, index: number) => {
            if(CartItem.name === name) {
                CartItem.quantity = CartItem.quantity + 1;
                duplicateItemTracker = index;
            }
        });

        duplicateItemTracker !== -1 
        ? 
        this.props.pStore.addCartItem([...currentCartItems]) 
        : 
        this.props.pStore.addCartItem([...currentCartItems, itemToAdd]);

        console.log(this.props.pStore.CartItems);
        
        
    }

    render() {

        const itemsToDisplay: JSX.Element[] = [];
        BrowserItemList.map((Item: BrowserItem, index: number) => {
            itemsToDisplay.push(<div key={index}>
                {Item.name}
                £{Item.price}
                {Item.description}
                <button onClick={this.addToCart} data-name={Item.name} data-price={Item.price} data-description={Item.description}>Add To Cart</button>
            </div>);
        });

        return (
            <div>
                {itemsToDisplay}
            </div>
        )
    }
}


export default WithStore(BrowserList, userCartItems)