'use client'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'reactstrap';
import profileImg from '../../images/profileImg.jpg'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Projects from './Projects';
import { socialLinks } from '../utils/data';


const Homesection = ({ blackbackground }) => {

    let textToType = "Frontend Engineer @ Infosys";

    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < textToType.length) {
                setDisplayText((prevText) => prevText + textToType.charAt(currentIndex));
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(intervalId);
            }
        }, 75);

        return () => {
            clearInterval(intervalId);
        };
        
    }, [currentIndex]);

   



    return (
        <>
            <section style={{ marginTop: '80px' }} id='home'>
                
                    <Container>
                        <Row className={styles.about__me}>
                            <Col lg="6" md="6" className="mb-5">
                                <h1>Hi ,my name is Shrikant Jha,</h1>
                                <h3>{displayText}</h3>
                                <p>Hi my name is Shrikant Jha , Im a Frontend developer
                                    at Infosys <br />I do all things Coding<br />
                                    I love to make Youtube videos
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button onClick={() => window.open('https://drive.google.com/file/d/1dw_dKAQCOTqSXTdmMuNg1fzdpZUxRy_y/view?usp=sharing', '_blank')} variant={styles.secondary}>Resume</Button>
                                    {
                                        socialLinks.map((socialLink, index) => {
                                            return <button key={index} onClick={() => window.open(socialLink.Link, '_blank')} style={{ margin: '0 15px' }} title={socialLink.Title}>{socialLink.Icon}</button>
                                        })
                                    }
                                </div>
                            </Col>

                            <Col className={styles.profileImg}>
                                <Image style={{ borderRadius: '50%', width: '400px', height: '400px' }} src={profileImg} alt='Profile Image' />
                            </Col>
                        </Row>
                    </Container>
            </section>
            <Projects blackbackground={blackbackground} />
        </>
    )
}

export default Homesection;


