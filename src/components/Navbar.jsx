import React from "react";
import styles from "../styles/Total.module.css";

// instead of useing useContext hook we use custom hook
import { useValue } from "../itemContext";
// import {useContext} from 'react';
// import { itemContext } from "../itemContext";
// import { totalContext } from "../totalContext";

function Navbar() {

  // const item = useContext(itemContext);
  // const total = useContext(totalContext);

// instead of using usecontext use custom hook
const {item,total,Clear,toggle} = useValue();
  // const value = useContext(itemContext);

  // console.log(value);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button} onClick={toggle}>Cart</button>
        <button className={styles.button} onClick={Clear}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
