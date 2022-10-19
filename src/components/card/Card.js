import React from "react";
import productos from "./productos.css"
import { Link } from "react-router-dom";
const Card = (props) => {

    return (
        <div className="card productos__card">
            <img src={props.imagen} className="card-img-top" alt="Imagebn producto" />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.descripcion}<span className= 'glyphicon .glyphicon-shopping-cart'></span></p>
                    <Link to="#" className="btn btn-warning productos__boton">
                        <span className= 'glyphicon .glyphicon-shopping-cart'></span>Añadir al arrito
                        </Link>
                </div>
        </div>
    )
};

export default Card;