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
        console.log('line 85', blackbackground)
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
                                    NAV_LINKS.map((navlink, index) => {
                                        return (
                                            <li onClick={() => ScrollToSection(`#${navlink.id}`)} key={index} className={`cursor-pointer font-sans ${styles.navItems}`}>{navlink.Label}</li>
                                        )
                                    })
                                }
                                {/* <Button className={`${styles.switchBtn}`} onClick={() => ChangeBackground()} variant={blackbackground ? 'light' : 'dark'}>{blackbackground ? 'LightMode' : 'DarkMode'}</Button> */}
                                <button style={` ${{backgroundColor: blackbackground ?'white':'black' ,color: blackbackground?'white':'black'}}`} onClick={() => ChangeBackground()}>{blackbackground ? 'LightMode' : 'DarkMode'}</button>
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
