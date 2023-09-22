import React from "react";
import style from "./Home.module.css";
function Home(){

    return(
        <div className={style.container}>
            <div className={style.me}>
            <h1 className={style.iam}>Hi! I'm</h1>
            <h1 className={style.name}>FERNANDO JOSÉ TEJADA VELAZQUEZ</h1>
            </div>
            <div>
                <img className={style.photo} src={process.env.PUBLIC_URL + '/ME2.png'} alt="me" />
            </div>
        </div>
    )
}
export default Home;