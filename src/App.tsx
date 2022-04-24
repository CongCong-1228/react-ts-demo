import React from 'react';
import styles from './App.module.css';
import Robot from './components/Robot'
import robots from './mockdata/robot.json'
import ShoppingCart from "./components/shoppingCart";

function App() {
    return (
        <>
            <div className={styles.appHeader}>
                <h1 className={styles.title}>机器人商店</h1>
            </div>
            <ShoppingCart/>
            <div className={styles.robotList}>
                {robots.map(robot => (<Robot id={robot.id} name={robot.name} email={robot.email}/>))}
            </div>
        </>
    );
}

export default App;
