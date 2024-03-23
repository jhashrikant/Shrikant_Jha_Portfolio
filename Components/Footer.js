'use client';
import React from 'react'
import { Container } from 'reactstrap';
import { socialLinks } from './utils/data';


const Footer = () => {


	const currentYear = new Date().getFullYear();


	return (
		<section className='mt-20' id='footer'>
			<Container>
				<footer style={{ marginBottom: '60px' }} className="text-gray-600 body-font">
					<div className="container  mx-auto flex items-center sm:flex-row flex-col">
						<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
							<div>&lt;/&gt;</div>
							<span className="ml-3 text-xl text-gray-500">Shrikant Jha</span>
						</a>
						<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©{currentYear} Developed by Shrikant Jha —
							<a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@All rights reserved</a>
						</p>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
							{
								socialLinks?.map(({ id, Title, reacticons, Link }) => {
									return (
										<button className='font-sans text-xl hover:bg-white my-0 mx-4' key={id} onClick={() => window.open(Link, '_blank')} title={Title}>{reacticons}</button>
									)
								})
							}
						</span>
					</div>
				</footer>
			</Container>
		</section>
	)
}

export default Footer
