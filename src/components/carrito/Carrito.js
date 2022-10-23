import React from "react";
import { Link } from "react-router-dom";
import carritoCSS from "./carrito.css"

const Carrito = () => {

    return (
        <div>
            <Link className="position-relative carrito__icono" to="/" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <img className='navegacion__icono ' src=".\img\iconos\Carrito.svg" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill carrito__icono__contador">
                    {
                        localStorage.getItem("numProd")
                    }
                    <span class="visually-hidden">cantidad de productos</span>
                </span>
            </Link >
        </div>
    )
}

export default Carrito;