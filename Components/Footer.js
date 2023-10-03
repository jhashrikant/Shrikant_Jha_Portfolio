'use client';
import React from 'react'
import { Container } from 'reactstrap';
import { socialLinks } from './utils/data';


const Footer = () => {


    const currentYear = new Date().getFullYear();


    return (
        <section style={{ marginTop: '80px' }} id='footer'>
            <Container>
                <footer style={{marginBottom:'60px'}} className="text-gray-600 body-font">
                    <div className="container  mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg> */}
                            <div>&lt;/&gt;</div>
                            <span className="ml-3 text-xl text-gray-500">Shrikant Jha</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©{currentYear} Developed by Shrikant Jha —
                            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@All rights reserved</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            {
                                socialLinks.map((socialLink, index) => {
                                    return (
                                        <button className='font-sans text-xl hover:bg-white' key={index} onClick={() => window.open(socialLink.Link, '_blank')} style={{ margin: '0 15px' }} title={socialLink.Title}>{socialLink.reacticons}</button>
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
