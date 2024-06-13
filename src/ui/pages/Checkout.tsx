import React from 'react';

import WithStore, { userCartItems, CartItems, CartItem } from '@app/backend/stores';

import '@css/pages/Checkout.scss'
import { contentRoutes } from '@app/constants';
import { router } from '@app/main';

interface IProps {
    pStore: CartItems;
}

class Checkout extends React.Component<IProps, never> {
    constructor(props: IProps) {
        super(props);
    }

    simulateCheckout = () => {
        console.log("item bought");
        router.navigate(contentRoutes.BROWSE);
    }

    render() {
        const userCart: JSX.Element[] = [];
        let totalCost: number = 0;
        this.props.pStore.CartItems.map((CartItem: CartItem, index: number) => {
            totalCost += CartItem.quantity*CartItem.price;
        
            userCart.push(<div className="Cartitem_block" style={{
                
                
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
                padding: 10,
                fontSize: 25
            }}>
                <div className="CartItem name" style={{
                   textAlign: 'left',
                   
                   marginLeft: 10
                }}>
                    {CartItem.name}
                </div>
                <div className="CartItem price" >
                    <span>£{CartItem.price*CartItem.quantity}</span>
                </div>
            </div>)
        });
        totalCost = Math.round(totalCost * 100) / 100;
        return(
            <div>
                
                <div className="checkout">
                    <div className="Cartarea">
                        <div className="Cartinfo top" style={{
                  
                            
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                            padding: 10,
                            fontSize: 25
                            }}>
                            <div className="Cartinfo" style={{
                                textAlign: 'left',
                                width: '45%',
                                marginLeft: 10
                                }}>
                                    Name
                            </div>
                            <div className="Cartinfo">
                                Price
                            </div>
                        </div>


                        <div>
                            {userCart}
                        </div>  


                        <div className="Cartinfo bottom" style={{                     
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                            padding: 10,
                            fontSize: 25
                            }}>
                            <div className="Cartinfo" style={{
                                textAlign: 'left',
                                width: '45%',
                                marginLeft: 10
                                }}>
                                    Total Cost
                            </div>
                            <div className="Cartinfo">
                                £{totalCost}
                            </div>
                        </div>
                    </div>
                    <div className='formsection'>
                        <form onSubmit={this.simulateCheckout}>
                            <div className="forminfo">
                                <p> Don't actually fill this in. </p>
                                <div><label>Card Number: </label>
                                <input type="number" placeholder='5555 5555 5555 5555'></input>
                                </div>
                                <div><label>Card Expiry: </label>
                                <input type="string" placeholder='01/30'></input></div>
                                <div><label>CVV: </label>
                                <input type="number" placeholder="999"></input></div>
                                
                                <button type="submit">Buy</button>
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}

export default WithStore(Checkout, userCartItems);