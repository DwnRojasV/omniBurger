import React from "react";
import pagesCss from './pages.css';
import Carrusel from "../carrusel/Carrusel";
import Card from "../card/Card";

const Inicio = () => {

    return (
        <div className="pages">
            <Carrusel />
            <h1 className="pages__titulo">Página de inicio</h1>
            <div className="container productos">
                <Card
                    imagen='./logo192.png'
                    titulo='Nombre del producto'
                    descripcion='Aquí va la descripción del producto'
                />
                <Card
                    imagen='./logo192.png'
                    titulo='Nombre del producto'
                    descripcion='Aquí va la descripción del producto'
                />
                <Card
                    imagen='./logo192.png'
                    titulo='Nombre del producto'
                    descripcion='Aquí va la descripción del producto'
                />
                <Card
                    imagen='./logo192.png'
                    titulo='Nombre del producto'
                    descripcion='Aquí va la descripción del producto'
                />
                <Card
                    imagen='./logo192.png'
                    titulo='Nombre del producto'
                    descripcion='Aquí va la descripción del producto'
                />
                <Card
                    imagen='./logo192.png'
                    titulo='Nombre del producto'
                    descripcion='Aquí va la descripción del producto'
                />
            </div>
        </div>
    )
};
export default Inicio;
