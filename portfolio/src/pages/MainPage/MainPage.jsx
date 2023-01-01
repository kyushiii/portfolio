import React from 'react';
import styles from "../MainPage/MainPage.module.css";
import NavBar from "../../components/NavBar/NavBar.jsx"

function MainPage() {
    return ( 
    <div className={styles.MainPage}>
       <NavBar/>
    </div> );
}

export default MainPage;