import React from 'react';
import './styles.scss';
import {Link,NavLink } from 'react-router-dom';
const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
                <h4>DS CATALOG</h4>
            </Link>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li >
                    <NavLink to="/" activeClassName="active" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Catalog" activeClassName="active">
                        Catalog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Admin" activeClassName="active">
                        Admin
                    </NavLink>
                </li>

            </ul>
        </div>
    </nav>
)


export default Navbar;