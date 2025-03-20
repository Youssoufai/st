"use client";
import React from "react";
import { motion } from "framer-motion";

const newsData = [
    {
        id: 1,
        title: "Empowerment: I was honored to attend the massive empowerment program organized by Hon. Umar Shehu Ajilo...",
        date: "March 8, 2025",
        description: "I was honore to attend the massive empowerment program organized by Hon.Umar Shehu Ajilo...",
        image: "/emp.jpg",
    },
    {
        id: 2,
        title: "I was present at the 2025 North West Zonal Executive Committee meeting in Kaduna",
        date: "Feb 15, 2025",
        description: "Today, I attended the 2025 North West Zonal Executive Committee meeting in Kaduna",
        image: "/zonal.jpg",
    },
    {
        id: 3,
        title: "I received my brother, Sen Yakubu Lado Danmarke, at my residence...",
        date: "Feb 15, 2025",
        description: "Strategizing for PDP’s Future in Katsina and Beyond",
        image: "/dan.jpg",
    },
];

const NewsCard = ({ news }) => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
            whileHover={{ scale: 1.05 }}
        >
            <img src={news.image} alt={news.title} className="w-full h-52 object-cover" />
            <div className="p-5">
                <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">News</span>
                <p className="text-gray-600 text-sm mt-2">{news.date}</p>
                <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{news.description}</p>
            </div>
        </motion.div>
    );
};

export default function NewsSection() {
    return (
        <section className="py-10 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Latest News</h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {newsData.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
