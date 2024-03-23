
import { Container } from 'reactstrap';
import { projects } from '../utils/data';
import Link from 'next/link';
import styles from '../styles/Projects.module.css'
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
					{projects?.map(({ id, projectTitle, techStack, Icon, Github }) => {
						return (
							<Link key={id} href={Github || '/'} target='_blank' style={{ color: 'black', textDecoration: 'none' }}>
								<div style={{ border: blackbackground ? '1px solid #fff' : "1px solid black" }} className={styles.projects__container}>
									<div className={styles.single_project_card}>
										<div className={styles.projectIcon}>
											{Icon}
										</div>
										<div className={styles.project__details}>
											<div className={styles.project__title}>
												{projectTitle}
											</div>
											<div className={styles.project__stack}>
												{techStack}
											</div>
											<button
												type="button"
												data-twe-ripple-init
												data-twe-ripple-color="light"
												className="mt-2 inline-block rounded bg-primary px-6 !important pb-2 !important pt-2.5 !important text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
												View Project
											</button>
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
