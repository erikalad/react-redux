import React from "react";
import './Contactame.css';

export default function Contactarme (){
    return(
    <div className="formulario">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Tu mensaje</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Contame!"></textarea>
        <button type="button" class="btn btn-success btn-block" id="enviar">Enviar</button>
        {/*<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdc_nIBRS77HYZASv3W9GzO48OjVS4UipTt5dpmbPBkkDV_GQ/viewform?embedded=true" width="640" height="407" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>*/}
        </div>
    </div>
    )   
}