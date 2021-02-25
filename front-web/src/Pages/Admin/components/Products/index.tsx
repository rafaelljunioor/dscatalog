import React from 'react';
import { Route,Link, Switch } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Link to="/admin/products" className="mr-5">
                Lista Produtos
            </Link>
            <Link to="/admin/products/create" className="mr-5">
                Criar Produtos
            </Link>
            <Link to="/admin/products/10" className="mr-5">
                editar Produtos
            </Link>
            <Switch>
                <Route path="/admin/products" exact>
                    <h1>Exibir listagem de produtos</h1>
                </Route>
                <Route path="/admin/products/create" exact>
                    <h1>Criar novo produto</h1>
                </Route>
                <Route path="/admin/products/:productId">
                    <h1>Exibir detalhes de produto </h1>
                </Route>
            </Switch>

        </div>
    );
}

export default Products;