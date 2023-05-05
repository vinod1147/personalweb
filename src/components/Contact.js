import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5aiqm7a', 'template_kv0bjhi', form.current, 'JK8tX538GPv2Pbj8J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div>
            {/* <div className='max-w-[1240px] m-auto p-4 h-screen'>
                <h1 className='text-6xl font-bold text-center p-4 bolt'>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className='max-w-[600px] m-auto'>
                    <div className='grid grid-cols-2 gap-2'>
                        <input className='border shadow-lg p-3' type="text" name="name" placeholder='Name' />
                        <input className='border shadow-lg p-3' type="email" name="email" placeholder='Email' />
                    </div>
                    <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' name='subject' />
                    <textarea name="message" className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
                    <button type='submit' value="send" className='border shadow-lg p-3 w-full mt-2'>Submit</button>
                </form>
            </div> */}



            <section className="contact-area pt-5 pb-12 bg-[#000] text-white w-[100%]">
                <div className="container">
                    <div className="row1 text-center">
                        <div className="heading mb-10">
                            <h2 className='contacth text-4xl tracking-wide font-extrabold uppercase text-transparent'>Contact Now</h2>
                        </div>
                    </div>
                    <div className="row2 flex">
                        <div className="left mb-7 px-3 w-[60%]">
                            <div className="contact-form">
                                <form action="#">
                                    {/* <div className="row -m-3">
                                        <div className='px-3 flex'>
                                            <div className='input w-[100%] p-2'>
                                                <input className='border-2 w-[100%] border-[#2b2a2a] bg-black text-[#ccc] shadow-lg p-5' type="text" name="name" placeholder='Name' />
                                            </div>
                                            <div className='input w-[100%]'>
                                                <input className='border-2 w-[100%] border-[#2b2a2a] bg-black text-[#ccc] shadow-lg p-5' type="email" name="email" placeholder='Email' />
                                            </div>
                                        </div>
                                        <div className='px-3'></div>
                                        <div className='px-3'></div>
                                        <div className='px-3'></div>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                        <div className="right w-[40%] p-5 mb-7">
                            <div className='bg-contactbg bg-cover bg-no-repeat bg-center relative z-10 py-10 px-7'>
                                <div>
                                    <h2 className='text-white mb-5 capitalize leading-2 text-[30px] font-bold'>Don&apos;t Hesitate To Contact Us</h2>
                                </div>
                                <div>
                                    <div className="item mb-20">
                                        <div className='icon'></div>
                                        <div className='content'></div>
                                    </div>
                                    <div className="item mb-20">
                                        <div className='icon'></div>
                                        <div className='content'></div>
                                    </div>
                                    <div className="item">
                                        <div className='icon'></div>
                                        <div className='content'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
