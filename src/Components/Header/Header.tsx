import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = React.memo(() => {
	return (
		<div className={styles.center}>
			<div className={styles.main}>
				<div>
					<NavLink to="/prejunior" activeClassName={styles.link}>PreJunior</NavLink>
				</div>
				<div>
					<NavLink to="/junior" activeClassName={styles.link}>Junior</NavLink>
				</div>
				<div>
					<NavLink to="/strongjunior" activeClassName={styles.link}>Junior+</NavLink>
				</div>
			</div>
		</div>
	)
})

export default Header;