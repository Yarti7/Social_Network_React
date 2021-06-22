import React from "react";
import se from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return    <header className={se.header} >
        <img src='https://muk.ua/bitrix/templates/7073_140812/images/muk_logo.jpg' />
        <div className={se.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>

}

export  default Header;