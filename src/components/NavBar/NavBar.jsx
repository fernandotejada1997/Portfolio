import React from "react";
import style from "./NavBar.module.css"

function NavBar(){
    return(
        <div className={style.container}>
            <div className={style.buttons}>
            <button className={style.button}>HOME</button>
            <button className={style.button}>ABOUT ME</button>
            <button className={style.button}>SKILLS</button>
            <button className={style.button}>CONTACT</button>
            </div>
        </div>
    )
}

export default NavBar;