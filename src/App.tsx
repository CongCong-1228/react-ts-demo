import React, {useContext, useState} from 'react';
import styles from './App.module.css';
import Robot from './components/Robot'
import robots from './mockdata/robot.json'
import ShoppingCart from "./components/shoppingCart";


function App() {
    const [theme, setTheme] = useState(true);
    const themes = {
        theme,
        setTheme
    }
    const themeContext = React.createContext(themes); // 需要导出，或者使用props传给子元素

    return (
        <>
            <themeContext.Provider value={themes}>
                <div className={styles.appHeader}>
                    <h1 className={styles.title} style={{color: theme ? 'red' : 'green'}}>机器人商店</h1>
                </div>
                <ShoppingCart/>
                <div className={styles.robotList}>
                    {robots.map(robot => (<Robot id={robot.id} name={robot.name} email={robot.email}/>))}
                </div>
            </themeContext.Provider>
        </>
    );
}

export default App;
