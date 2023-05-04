import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <div>
            <footer class="text-gray-600 body-font bg-footerbg bg-[#0f0a0ab3] bg-[#0b0707]">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
                    <div class="flex-grow flex justify-center flex-wp text-center -mb-10 m items-center">
                        <div className='first w-[33.33%]'>sdf</div>
                        <div className='second w-[33.33%]'>
                            <div className='footer-widget'>
                                <div className='f-log'>VINOD</div>
                                <p className='leading-7 text-lg mt-5 text-[#ccc]'>Lorem ipsum dolor sit amet, cons aring elit sed dllao the eimod tempor inciunt.</p>
                            </div>
                        </div>
                        <div className='third w-[33.33%]'>
                            <div className='footer-widget mb-5 px-3'>
                                <div className='linksf'>
                                    <Link className='px-1 text-[#ccc] text-sm font-medium' href="/">FAQ</Link>
                                    <Link className='px-1 text-[#ccc] text-sm font-medium' href="/">Privacy Policy</Link>
                                    <Link className='px-1 text-[#ccc] text-sm font-medium' href="/">Terms & Condition</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-[#000000a3] border-t border-[#202020]">
                    <div class="container mx-auto py-7 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
                        <p class="text-gray-500 text-sm text-center sm:text-left">Copyright © 2021 VINOD. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
