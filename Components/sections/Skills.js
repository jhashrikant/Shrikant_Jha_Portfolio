
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
						TechnicalSkills?.map(({ id, Title, Progress }) => {
							return (
								<div key={id} style={{ border: blackbackground ? "1px solid #fff" : '1px solid black' }} className={styles.skillItems} >
									{Title}
									<div>
										<progress value={Progress} max="100">{Progress}</progress>
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
