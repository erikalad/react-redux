import React from "react"
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import './Footer.css';

export default function Footer(){
    return(
    <footer id="footer" class="pb-4 pt-4" >
            <div class="row text-center">
                <div class="col-12 col-lg">
                <Link to="/recursos">Recursos</Link>
                </div>
                <div class="col-12 col-lg">
                <Link to="/contactarme">Contactarme</Link>
                </div>
                <div className="git">
                <div className="yo">by Erika Ladner</div>
                <a href="https://github.com/erikalad/react-redux"><FaGithub/></a>
                </div>
            </div>
    </footer>
    )
}