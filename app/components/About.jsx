"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/first.jpg",
    "/second.jpg",
    "/third.jpg",
];

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-11 bg-gray-100 overflow-hidden">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-black">
                    About <span className="text-green-600">Muhammad Kabade</span>
                </h1>
            </div>

            {/* Slideshow Section */}
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? images.length - 1 : prevIndex - 1
                        )
                    }
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === images.length - 1 ? 0 : prevIndex + 1
                        )
                    }
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* About Text */}
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mt-6">
                <p className="mb-4">
                    Muhammad Kabade Suleiman hails from Nasarawan Doya Village, Makarfi LGA, Kaduna State. Born in 1996, he comes from a distinguished lineage as the son of the late Dan-Malikin Zazzau and the grandson of the Emir of Nasarawan Doya. He holds the esteemed traditional title of{" "}
                    <span className="font-semibold text-black">Santurakin Nasarawan Doya</span>.
                </p>

                <p>
                    Passionate about youth empowerment, Muhammad aligned with the{" "}
                    <span className="font-semibold text-black">People's Democratic Party (PDP)</span> from an early age. At just 25, he made history as the National Youth Leader of the PDP, a milestone that signified a new era of youth involvement in Nigerian politics. His leadership continues to inspire and drive meaningful change for young people nationwide.
                </p>
            </div>
        </section>
    );
}
