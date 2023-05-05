import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-footerbg bg-[#0b0707] ">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
                    <div className="flex-grow flex justify-center flex-wp text-center -mb-10 m items-center">
                        <div className='first w-[33.33%] flex'>
                            <span className='mx-2'>
                                <Link href="/" className='flex justify-center items-center w-12 h-12 rounded-full bg-[#80878c] text-white hover:bg-[#EE5B6E] transition-colors'>
                                    {/* <FontAwesomeIcon icon={faFacebook} size="lg" /> */}
                                    <FontAwesomeIcon icon={faFacebookF} size='lg' />
                                </Link>
                            </span>
                            <span className="mx-2">
                                <Link href="/" className='flex justify-center items-center w-12 h-12 rounded-full bg-[#80878c] text-white hover:bg-[#EE5B6E] transition-colors'>
                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                </Link>
                            </span>
                            <span className="mx-2">
                                <Link href="/" className='flex justify-center items-center w-12 h-12 rounded-full bg-[#80878c] text-white hover:bg-[#EE5B6E] transition-colors'>
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                </Link>
                            </span>
                            <span className="mx-2">
                                <Link href="/" className='flex justify-center items-center w-12 h-12 rounded-full bg-[#80878c] text-white hover:bg-[#EE5B6E] transition-colors'>
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </Link>
                            </span>
                        </div>
                        <div className='second w-[33.33%]'>
                            <div className='footer-widget'>
                                <div className='f-log'>VINOD</div>
                                <p className='leading-7 text-lg mt-5 text-[#ccc]'>Lorem ipsum dolor sit amet, cons aring elit sed dllao the eimod tempor inciunt.</p>
                            </div>
                        </div>
                        <div className='third w-[33.33%]'>
                            <div className='footer-widget mb-5 px-3'>
                                <div className='linksf'>
                                    <Link className='px-1 text-[#ccc] text-sm font-medium hover:text-[#EE5B6E] transition-colors' href="/">FAQ</Link>
                                    <Link className='px-1 text-[#ccc] text-sm font-medium hover:text-[#EE5B6E] transition-colors' href="/">Privacy Policy</Link>
                                    <Link className='px-1 text-[#ccc] text-sm font-medium hover:text-[#EE5B6E] transition-colors' href="/">Terms & Condition</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#000000a3] border-t border-[#202020]">
                    <div className="container mx-auto py-7 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                        <p className="text-gray-500 text-sm text-center sm:text-left">Copyright © 2021 VINOD. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
