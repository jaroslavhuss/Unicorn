import React from 'react';
import {Link} from "react-router-dom"
const menu = () => {
    return (
        <div className="top-menu">
            <ul>
                <li><Link to="/">Vyhledat recept</Link></li>
                <li><Link to="/add-recipe">Přidat recept</Link></li>
                <li>Registrace</li>
            </ul>
        </div>
    )
}

export default menu
