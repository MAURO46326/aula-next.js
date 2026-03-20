'use client'

import { useState } from "react";
import styles from "./page.module.css"
export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }

    return (
        <div className={styles.labelcss}>
            <label >{`Contador: ${num}`}</label>            
            <button  onClick={() => handleIncrementa()} className={styles.botaocss}>+1</button>
        </div>
    );
}