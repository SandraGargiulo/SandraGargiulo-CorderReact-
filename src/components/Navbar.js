/*import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";



function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Electromecanica Dil-Gar
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/products" className={classes.link}>
                        Productos
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        Contacto
                    </Link>
                    <Link to="/faq" className={classes.link}>
                        FAQ
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;*/

import React from 'react';
import CartWidget from './CardWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
/*import './styles/NavBar.css';*/

const NavBar = ({ background }) => {
    const brand =
        'https://i.ibb.co/F5Hb1dd/logo.png';

    return (
        <header className={`header background--${background}`}>

            <div className="header-container">

                { }
                <div className="menu-button">
                    <FontAwesomeIcon icon={faCartShopping} size="lg" color="black" />
                    <span>Menu</span>
                </div>

                { }
                <nav>
                    <ul className="nav-container">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li className="products-item">
                            <a href="/">
                                Productos <span className="arrow"></span>
                            </a>
                        </li>

                        <li>
                            <a href="/">Contacto</a>
                        </li>

                        <li>
                            <a href="/">FAQ</a>
                        </li>
                    </ul>
                </nav>

                {/* logo de la marca */}
                <div className="logo-container">
                    <img src={brand} alt="logo" />
                </div>

                {}
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;