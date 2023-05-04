"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className='sticky left-0 top-0 w-full z-10 ease-in duration-300 bg-[#0d0d0d] z-50'>
                <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-[#edf0f1]'>
                    <div href='/'>
                        <h1 className='font-bold text-3xl hover:text-[#ee5b6e] cursor-pointer'>
                            {/* <Image src="/favicon.ico" width={50} height={50}></Image> */}
                            VINOD
                        </h1>
                    </div>
                    <ul className='hidden sm:flex'>
                        <li className='p-4'>
                            <Link className='text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all' href='/' >HOME</Link>
                        </li>
                        <li className='p-4'>
                            <Link className='text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all' href='/about'>ABOUT</Link>
                        </li>
                        <li className='p-4'>
                            <Link className='text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all' href='/contact'>SERVICES</Link>
                        </li>
                        <li className='p-4'>
                            <Link className='text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all' href='/resource'>PORTFOLIO</Link>
                        </li>
                        <li className='p-4'>
                            <Link className='text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all' href='/resource'>CONTACT</Link>
                        </li>
                    </ul>
                    <button className='rounded-none font-semibold text-[#edf0f1] px-7 py-3 bg-[#ee5b6e] hover:bg-[#0B2B3C] transition-colors cButton'>DownloadCV</button>


                    {/* Mobile Button */}
                    <div onClick={handleNav} className='block sm:hidden z-10 '>
                        {nav ? (
                            <AiOutlineClose size={20} />
                        ) : (
                            <AiOutlineMenu size={20} />
                        )}
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={
                            nav
                                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white'
                                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        }
                    >
                        <ul>
                            <li onClick={handleNav} className='p-4 text-3xl text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all'>
                                <Link href='/'>HOME</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-3xl text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all'>
                                <Link href='/about'>ABOUT</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-3xl text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all'>
                                <Link href='/contact'>CONTACT</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-3xl text-[#edf0f1] hover:text-[#ee5b6e] font-bold transition-all'>
                                <Link href='/resource'>RESOURCE</Link>
                            </li>
                            <button className='rounded-none font-semibold text-[#edf0f1] m-4 px-7 py-3 bg-[#ee5b6e] hover:bg-[#0B2B3C] transition-colors'>Contact</button>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
