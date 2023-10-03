'use client';
import React from 'react';
import { Container } from 'reactstrap';
import { projects } from '../utils/data';
import Link from 'next/link';
import styles from '../styles/Projects.module.css'
import Button from 'react-bootstrap/Button';
import Skills from './Skills';




const Projects = ({ blackbackground }) => {
    return (
        <>
            <section id='projects'>
                <Container style={{ marginTop: '80px' }}>
                    <div className={styles.Projectsection_name}>
                        <h1>Projects</h1>
                    </div>
                </Container>

                <Container className={styles.Project__container}>
                    {projects.map((project, index) => {
                        return (
                            <Link key={index} href={project.Github || '/'} target='_blank' style={{ color: 'black', textDecoration: 'none' }}>
                                <div style={{ border: blackbackground ? '1px solid #fff' : "1px solid black" }} className={styles.projects__container}>
                                    <div className={styles.single_project_card}>
                                        <div className={styles.projectIcon}>
                                            {project.Icon}
                                        </div>
                                        <div className={styles.project__details}>
                                            <div className={styles.project__title}>
                                                {project.projectTitle}
                                            </div>
                                            <div className={styles.project__stack}>
                                                {project.techStack}
                                            </div>
                                            <Button style={{ margin: '10px' }} variant="dark">Github</Button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </Container>
            </section>
            <Skills blackbackground={blackbackground} />
        </>
    )
}

export default Projects
