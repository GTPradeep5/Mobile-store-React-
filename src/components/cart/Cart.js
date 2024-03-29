import React, { Component } from 'react'
import Title from '../Title'
import CartColums from './CartColums'
import EmptyCart from'./EmptyCart'
import {ProductConsumer} from '../../Context'
import Cartlist from './Cartlist'
import CartTotal from './CartTotal'



export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name='Your' title='cart'/>
                                    <CartColums />
                                    <Cartlist value={value}/>
                                    <CartTotal  value={value} history={this.props.history}/>
                                </React.Fragment>
                            )
                        }
                        else{
                            return  <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
