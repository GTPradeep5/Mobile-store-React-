import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom' 
import {Buttoncon} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart}=value.detailProduct
                    return(
                        <div className='container px-5'>
                            {/*titlw*/}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*prod details*/}
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} className='img-fluid' alt='product'/>
                                </div>
                                {/*prod text*/}
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <h2> Model : {title}</h2>  
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'> made by : 
                                    <span className='text-uppercase'>
                                        {company}                                                                                
                                    </span></h4> 
                                    <h4 className='text-blue'>
                                        <strong> price : <span>$</span> {price}</strong>                                    
                                    </h4>  
                                    <p className='text-capitalize font-weight-bold mt-4 mb-2 h4'>
                                        some info about product :
                                    </p>        
                                    <p className='text-muted lead text-justify mb-4'>{info}</p>  
                                    <div>
                                        <Link to='/'>
                                            <Buttoncon>
                                                back to products
                                            </Buttoncon>
                                        </Link> 
                                        <Buttoncon cart disabled={inCart ? true:false} onClick={()=> {value.addtocart(id); value.openModel(id)}}>
                                            {inCart?  'inCart': 'add to cart'}                                        
                                        </Buttoncon>
                                    </div>                     
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
