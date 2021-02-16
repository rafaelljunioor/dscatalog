import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard'
import './styles.scss'
import { makeRequest } from '../../core/utils/requests';
import { ProductsResponse } from '../../core/types/Product';
const Catalog = () => {
    //buscar lista de produtos 
    //Quando a lista de produtos estiver disponivel, listar os produtos dinamicamente

    const [productsReponse,setProductsResponse] = useState<ProductsResponse>();

    useEffect(()=>{
        
    const params = {
        page:0,
        linesPerPage:12

    }
        makeRequest({url:'/products',params})
        .then(response => setProductsResponse(response.data));
    },[]);  

return (
    <div className="catalog-container">
        <h1 className="catalog-title">Catálogo de Produtos</h1>
        <div className="catalog-products">
            {productsReponse?.content.map(product=>(
                <Link to={`/products/${product.id}`} key={product.id}>
                    <ProductCard product={product}/>
                </Link>
            ))}
            
        </div>
    </div>
    );
};

export default Catalog;