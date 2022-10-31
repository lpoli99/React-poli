import React from "react";
import CartIcon from "./CartIcon";
import "./nav-bar.scss"

function NavBar(){
    return(
        <nav className="navMenu">
            <ul className="navList">
                <li>
                    <a>
                        <h2>Repuestos Poli</h2>
                    </a>
                </li>
                <li>
                    <a href="#" className="navItem">Categorias</a>
                </li>
                <li>
                    <a href="#" className="navItem">Buscar</a>
                </li>
                <li>
                    <a href="#" className="navItem">Consultar</a>
                </li>
                <li>
                    <CartIcon/>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;