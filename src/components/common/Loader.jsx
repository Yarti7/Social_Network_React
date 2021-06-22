import React from "react";
import styles from "../Users/users.module.css";

let Loader = () => {
    return <div>
        <div className={styles.ldsring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}

export default Loader;