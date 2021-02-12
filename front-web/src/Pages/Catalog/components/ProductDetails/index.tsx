import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.scss';
import {ReactComponent as  ArrowIcon } from '../../../../core/assets/images/arrow.svg';  
import {ReactComponent as  ProductImage } from '../../../../core/assets/images/product.svg';  
import ProductPrice from '../../../../core/components/ProductPrice';

type ParamsType = {
    productId:string;
}

const ProductDetails = () =>
{
    const {productId} = useParams<ParamsType>();
    console.log(productId)

    return(
    <div className="product-details-container">
        <div className="card-base border-radius-20 product-details pr-">
           <Link to="/products" className="product-details-goback">
                <ArrowIcon className="icon-goback"/>
                <h1 className="text-goback">Voltar </h1>
            </Link>
            <div className="row">
                <div className="col-6 pr-5"> 
                    <div className="product-details-card text-center"> 
                         <ProductImage className=" product-details-image"/>
                    </div>
                    <h1 className="product-details-name">
                        Computador Desktop - Intel Core
                    </h1>
                    <ProductPrice price="R$ 20000,00"/>
                </div>
                <div className="col-6 product-details-card">
                    <h1 className="product-details-title">Descrição do Pruto </h1>
                    <p className="product-description-text">
                    Descrição do PrutoDescrição do PrutoDescrição do PrutoDescrição do PrutoDescrição do PrutoDescrição do 
                    PrutoDescrição do Pruto Descrição do Pruto Descrição do Pruto Descrição do Pruto Descrição do Pruto Descrição do Pruto 
                    Descrição do Pruto Descrição do Pruto Descrição do Pruto Descrição do Pruto 
                    Descrição do Pruto Descrição do Pruto.
                    </p>
                </div>
            </div>

        </div>
        
    </div>
    );

}

export default ProductDetails;