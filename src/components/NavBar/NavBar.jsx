import React from "react";
import CartIcon from "./CartIcon";
import "./nav-bar.css";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav className="navMenu">
            <ul className="navList">
                <li>
                    <Link to="/" className="navBrand">
                        <h2>Repuestos Poli</h2>
                    </Link>
                </li>
                <li>
                    <Link to="/category/neumaticos" className="navItem">Neumáticos</Link>
                </li>
                <li>
                    <Link to="/category/refrigerantes" className="navItem">Refrigerantes</Link>
                </li>
                <li>
                    <Link to="/category/aceites" className="navItem">Aceites</Link>
                </li>
                <li>
                    <CartIcon/>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;