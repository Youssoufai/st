import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="relative h-screen bg-[url('/text.jpg')] bg-center bg-cover">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                    <h1 className="text-5xl font-bold">Leadership with Vision, <span className="text-green-500">Service</span> with Integrity</h1>
                </div>
            </section>

        </>
    )
}

export default Hero;