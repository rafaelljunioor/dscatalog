import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Admin from './Pages/Admin';
import Navbar from './core/components/Navbar';
import ProductDetails from './Pages/Catalog/components/ProductDetails';

const Routes = () => (
<BrowserRouter>
<Navbar/>
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/products" exact>
            <Catalog/>
        </Route>
        <Route path="/products/:productId">
            <ProductDetails/>
        </Route>
        <Route path="/admin">
            <Admin/>
        </Route>
    </Switch>
</BrowserRouter>
);

export default Routes;