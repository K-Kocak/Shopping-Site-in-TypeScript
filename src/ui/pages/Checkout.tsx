import React from 'react';

import WithStore, { userCartItems, CartItems, CartItem } from '@app/backend/stores';

interface IProps {
    pStore: CartItems;
}

class Checkout extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const userCart: JSX.Element[] = [];
        this.props.pStore.CartItems.map((CartItem: CartItem, index: number) => {
            userCart.push(<div className="Cartitem_block" style={{
                background: 'red',
                width: '60%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'left',
                margin: 10,
                padding: 10,
                fontSize: 25
            }}>
                <div className="CartItem name" style={{
                   textAlign: 'left',
                   width: '45%',
                   marginLeft: 10
                }}>
                    {CartItem.name}
                </div>
                <div className="CartItem price">
                    £{CartItem.price*CartItem.quantity}
                </div>
            </div>)
        });

        return(
            <div>
                <div>
                    <div>
                        
                    </div>
                    {userCart}
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default WithStore(Checkout, userCartItems);