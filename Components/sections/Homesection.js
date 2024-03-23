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
								I share my learnings on my Yotube videos 
							</p>

							<div className='flex items-center'>
								<button
									onClick={() => window.open('https://drive.google.com/file/d/1WiwxRZsMiu6kGrUMlZObBz0vWYTVJ-_5/view', '_blank')}
									type="button"
									data-twe-ripple-init
									data-twe-ripple-color="light"
									className="inline-block rounded bg-primary px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
									Resume
								</button>

								{socialLinks.map((socialLink, index) => {
									return <button key={index} onClick={() => window.open(socialLink.Link, '_blank')} className='my-0 mx-3' title={socialLink.Title}>{socialLink.Icon}</button>
								})}
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


