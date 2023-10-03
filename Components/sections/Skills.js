
'use client'
import React from 'react'
import { Container } from 'reactstrap'
import { TechnicalSkills } from '../utils/data'
import styles from '../styles/skillItems.module.css'

const Skills = ({ blackbackground }) => {
    return (
        <section id='skills'>
            <Container style={{ marginTop: '80px' }}>
                <div className={styles.SKillSection_name}>
                    <h2>Skills</h2>
                </div>
            </Container>


            <Container >
                <div className={styles.skill__Container}>
                    {
                        TechnicalSkills.map((skill, index) => {
                            return (
                                <div key={index} style={{ border: blackbackground ? "1px solid #fff" : '1px solid black' }} className={styles.skillItems} >
                                    {skill.Title}
                                    <div>
                                        <progress value={skill.Progress} max="100">{skill.Progress}</progress>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>

        </section>
    )
}

export default Skills
