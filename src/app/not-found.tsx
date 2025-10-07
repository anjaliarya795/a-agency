import FilledBtn from '@/components/buttons/FilledBtn'
import SharedHeroSection from '@/components/shared/SharedHeroSection'
import Link from 'next/link'
import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

function NotFound() {
    return (
        <div className="w-full flex flex-col gap-32 mb-20">
            <SharedHeroSection title="Not Found" />
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <FiAlertTriangle className="w-16 h-16 text-primary" />
                <h1 className="text-6xl font-bold mt-4">404</h1>
                <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
                <p className="text-gray-500 mt-2">
                    We're sorry, the page you have looked for does not exist in our website!
                    Maybe go to our home page or try to use a search?
                </p>
                <Link href="/" className='mt-4' >
                    <FilledBtn label='Go Back To Home' className='bg-primary text-white' />
                </Link>
            </div>

        </div>
    )
}

export default NotFound