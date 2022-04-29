import React, {useContext, useState} from "react";
import styles from './shoppingCart.module.css'
import {appContext} from "../AppState";

interface Props {
}


const ShoppingCart: React.FC<Props> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const state = useContext(appContext)
    return (
        <>
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={() => {
                    setIsOpen(!isOpen)
                }}>购物车
                </button>
                <div className={styles.cartDropDown}>
                    <span>{state.shoppingCart.items.length}</span>
                    <ul style={{display: isOpen ? 'block' : 'none'}}>
                        {state.shoppingCart.items.map(item => {
                            return <li>{item.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )

}
export default ShoppingCart


