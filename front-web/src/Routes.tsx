import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Admin from './Pages/Admin';
import Navbar from './core/components/Navbar';

const Routes = () => (
<BrowserRouter>
<Navbar/>
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/catalog">
            <Catalog/>
        </Route>

        <Route path="/admin">
            <Admin/>
        </Route>
    </Switch>
</BrowserRouter>
);

export default Routes;