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
            <div className='sticky left-0 top-0 w-full z-10 ease-in duration-300 shadow-md darkgrey bg-[#24252a]'>
                <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
                    <div href='/'>
                        <h1 className='font-bold text-4xl hover:text-gray-500'>
                            <Image src="/favicon.ico" width={50} height={50}></Image>
                        </h1>
                    </div>
                    <ul className='hidden sm:flex'>
                        <li className='p-4'>
                            <Link className=' text-[#edf0f1] hover:text-[#0088a9] transition-all' href='/' >HOME</Link>
                        </li>
                        <li className='p-4'>
                            <Link className=' text-[#edf0f1] hover:text-[#0088a9] transition-all' href='/about'>ABOUT</Link>
                        </li>
                        <li className='p-4'>
                            <Link className=' text-[#edf0f1] hover:text-[#0088a9] transition-all' href='/contact'>PROJECTS</Link>
                        </li>
                        <li className='p-4'>
                            <Link className=' text-[#edf0f1] hover:text-[#0088a9] transition-all' href='/resource'>SERVICES</Link>
                        </li>
                    </ul>
                    <button className='rounded-full font-semibold text-[#edf0f1] p-2 w-32 bg-[#0088a9] hover:bg-[#0088a9cc] transition-all cButton'>Contact</button>


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
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/'>HOME</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/about'>ABOUT</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/contact'>CONTACT</Link>
                            </li>
                            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                                <Link href='/resource'>RESOURCE</Link>
                            </li>
                            <button className='rounded-full font-semibold text-[#edf0f1] m-4 p-2 w-32 bg-[#0088a9] hover:bg-[#0088a9cc] transition-all'>Contact</button>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Navbar;
