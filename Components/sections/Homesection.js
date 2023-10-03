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
                                <h1>Hi , my name is Shrikant Jha ,</h1>
                                <h3>{displayText}</h3>
                                <p>Hi my name is Shrikant Jha , Im a Frontend developer
                                    at Infosys <br />I do all things Coding<br />
                                    I love to make Youtube videos
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button onClick={() => window.open('https://drive.google.com/file/d/1dw_dKAQCOTqSXTdmMuNg1fzdpZUxRy_y/view?usp=sharing', '_blank')} variant="secondary">Resume</Button>
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

{/* <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                                
                            </h1>
                            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <Image className="object-cover object-center"
                            style={{ borderRadius: '50%', width: '400px', height: '400px' }}
                                src={profileImg}
                                
                                alt="Profile Image"
                            />
                            
                        </div>
                    </div>
                </section> */}
