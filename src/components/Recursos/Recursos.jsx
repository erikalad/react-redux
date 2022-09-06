import React from "react";
import './Recursos.css';
import { SiBootstrap , SiReact , SiRedux , SiCss3} from 'react-icons/si';

export default function Recursos(){
    return(
        <div className="contenedor-iconos">
            <h3 className="recursos">Recursos utilizados para esta página</h3>
            <div className="iconos">
            <div className="icon" id="bo"><SiBootstrap /></div>
            <div className="icon" id="react"><SiReact /></div>
            <div className="icon" id="redux"><SiRedux /></div>
            <div className="icon" id="css"><SiCss3 /></div>
            </div>
        </div>
    )
}