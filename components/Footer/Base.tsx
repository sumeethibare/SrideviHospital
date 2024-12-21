import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.jpg'
import { SocialIcon } from 'react-social-icons'

function Base() {
    return (
        <>
            <footer className="footer bg-zinc-50 text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <Image src={logo} alt={'logo'} className='w-10' />
                    <p>Copyright © 2024  Shridevi Hospital - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-0 md:place-self-center md:justify-self-end">

                    <SocialIcon url="https://www.facebook.com/shridevihospital" bgColor="transparent" fgColor="black" />

                    <SocialIcon url="https://www.instagram.com/shridevihospital/" bgColor="transparent" fgColor="black" />

                </nav>
            </footer>
        </>
    )
}

export default Base