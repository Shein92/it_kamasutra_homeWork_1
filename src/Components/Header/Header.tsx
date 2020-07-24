import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.center}>
			<div className={styles.main}>
				<div>
					<NavLink to="/prejunior" className={styles.link}>PreJunior</NavLink>
				</div>
				<div>
					<NavLink to="/junior" className={styles.link}>Junior</NavLink>
				</div>
				<div>
					<NavLink to="/strongjunior" className={styles.link}>Junior+</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Header;