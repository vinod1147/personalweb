import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='bg-[#0d0d0d]'>
      <div className='container p-[50px] pb-0 mx-auto text-white'>
        <div className='row flex'>
          <div className='content w-[50%] py-[50px]'>
            <h4 className='text-2xl font-normal mb-5 tracking-wider text-[#E4EAEE]'>------ Hello</h4>
            <h2 className='text-5xl font-extrabold leading-tight mb-4 text-[#E4EAEE]'>
              I&apos;m
              <span className='text-[#EE5B6E]'> Vinod</span>
              <br />
              Web Developer
            </h2>
            <p className='mb-8 text-2xl text-[#ccc]'>It is a long established fact that a reader will be distracted by the readable content .</p>
            <Link href='/'><button className='py-4 px-8 text-white text-lg bg-[#EE5B6E] hover:bg-[#0B2B3C] font-medium transition-colors'>Hire Me</button ></Link >
          </div>
          <div className='image w-[50%] flex items-center justify-center content-center'>
            <Image src='/profile.png' width={350} height={0} alt='Profile Photo'></Image >
          </div>
        </div>
      </div>
    </section >
  )
}
