import React from 'react';
import styles from './App.module.css';
import Robot from './components/Robot'
import robots from './mockdata/robot.json'

function App() {
    return (
        <>
            <div className={styles.robotList}>
                {robots.map(robot => (<Robot id={robot.id} name={robot.name} email={robot.email}/>))}
            </div>
        </>
    );
}

export default App;
