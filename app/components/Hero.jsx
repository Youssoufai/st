import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="relative h-screen bg-[url('/text.jpg')] bg-center bg-cover">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                    <h2 className="text-lg sm:text-2xl font-light uppercase tracking-wider">Welcome to the official website of</h2>
                    <h1 className="text-4xl sm:text-6xl font-extrabold mt-4">
                        Muhammad <span className="text-green-500">Kabade</span> Suleiman
                    </h1>
                    <p className='mt-4'>National Youth Leader of The PDP <span className='font-bold'>(MON)</span></p>
                </div>
            </section>


        </>
    )
}

export default Hero;