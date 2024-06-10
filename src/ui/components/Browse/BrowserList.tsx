import React, { BaseSyntheticEvent } from 'react';

import BrowserItemList, { BrowserItem } from '@app/backend/BrowserItem';
import WithStore, {userCartItems, CartItem, CartItems} from '@app/backend/stores';

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
        const itemToAdd: CartItem = 
        {name, price};
        console.log(this.props.pStore.CartItems);
        this.props.pStore.addCartItem([...this.props.pStore.CartItems, itemToAdd]);
        
    }

    render() {

        const itemsToDisplay: JSX.Element[] = [];
        BrowserItemList.map((Item: BrowserItem, index: number) => {
            itemsToDisplay.push(<div key={index}>
                {Item.name}
                £{Item.price}
                <button onClick={this.addToCart} data-name={Item.name} data-price={Item.price}>Add To Cart</button>
            </div>);
        });

        return (
            <div>
                {itemsToDisplay}
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithStore(BrowserList, userCartItems)