'use client';
import React, { useRef, useState } from 'react';
import styles from './Header.module.css'
import { Container } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Homesection from './sections/Homesection';
import { GiHamburgerMenu } from 'react-icons/gi';




const Header = () => {
	const navbarRef = useRef();


	const [blackbackground, setblackbackground] = useState(false);//initially background is white


	const NAV_LINKS = [
		{
			id: 'home',
			Label: 'Home',
			path: '/'
		},
		{
			id: 'experience',
			Label: 'Experience',
			path: '/experience'

		},
		{
			id: 'projects',
			Label: 'Projects',
			path: '/projects'

		},
		{
			id: 'skills',
			Label: 'Skills',
			path: '/skills'
		},

	]

	function ScrollToSection(idtoscroll) {
		console.log(idtoscroll)
		const targetelement = document.querySelector(idtoscroll);
		if (targetelement) {
			targetelement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			navbarRef.current.classList.toggle(`${styles.active}`)
		}
	}

	function ChangeBackground() {
		setblackbackground((Prevmode) => !Prevmode);
		const updatedValue = !blackbackground;
		console.log(updatedValue);
		document.body.style.backgroundColor = updatedValue ? 'black' : 'white'   //updated value meaans blackbg is there ? if yes then set bg to white
		document.body.style.color = updatedValue ? 'white' : 'black'
		document.body.style.transition = 'ease-in smooth';
	}

	function OpenHamburgerMenu() {
		navbarRef.current.classList.toggle(`${styles.active}`)
	}


	return (
		<>
			<section id='header'>
				<Container>
					<nav className={styles.navbar}>
						<div className={styles.brand_title}>SHRIKANT JHA</div>

						<GiHamburgerMenu onClick={() => OpenHamburgerMenu()} className={styles.toggle_button} />

						{/* navlinks */}
						<div ref={navbarRef} className={styles.navbar_links}>
							<ul className={styles.list_items}>
								{
									NAV_LINKS.map(({ Label, id }) => {
										return (
											<li key={id} onClick={() => ScrollToSection(`#${navlink.id}`)} className={`${styles.cursor_pointer} font-sans ${styles.navItems}`}>{Label}</li>
										)
									})
								}
								<button
									onClick={() => ChangeBackground()}
									type="button"
									data-twe-ripple-init
									data-twe-ripple-color="light"
									className={`${blackbackground ? 'light' : 'dark'} inline-block rounded bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}>
									{blackbackground ? 'Light Mode' : "dark mode"}
								</button>
							</ul>
						</div>
					</nav>
				</Container>
			</section>
			{/* render Home section */}
			<Homesection blackbackground={blackbackground} />
		</>

	)
}

export default Header
