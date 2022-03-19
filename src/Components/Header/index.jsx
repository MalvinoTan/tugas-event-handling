import React from "react";

/** Styles */
import styles from "./style.module.css";

class Header extends React.Component {
    render() {
        return (
            <h1 className={styles.header}>todos</h1>
        );
    }
}

export default Header;