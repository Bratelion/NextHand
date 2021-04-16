import React from 'react'
import styles from './style.module.css'
import Navigation from "../navigation"

const Header = () =>  {
    return (
        <div className={styles.main}>
            <Navigation />
        </div>
    )
}

export default Header