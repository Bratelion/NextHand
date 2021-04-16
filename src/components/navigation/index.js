import React from 'react'
import styles from './style.module.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

import Link1 from "../../pages/link1"
import Link2 from "../../pages/link2"
import Link3 from "../../pages/link3"
import Link4 from "../../pages/link4"


const Navigation = () =>  {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/link1" className={styles.links}>Link1</Link>
                    <Link to="/link2" className={styles.links}>Link2</Link>
                    <Link to="/link3" className={styles.links}>Link3</Link>
                    <Link to="/link4" className={styles.links}>Link4</Link>
                </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/link1">
                    <Link1 />
                </Route>
                <Route path="/link2">
                    <Link2 />
                </Route>
                <Route path="/link3">
                    <Link3 />
                </Route>
                <Route path="/link4">
                    <Link4 />
                </Route>
            </Switch>
        </div>
    </Router>
    )
}

export default Navigation