import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="h-screen w-full flex justify-center items-center pt-24 md:pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-screen-xl mx-auto px-8">
                <div className="lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
                        We help you to find <br /> your <span className="text-indigo-600">Dream Job</span>.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                        DreamJob is the worldwide leader on insights about jobs and companies. Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more. Hiring? Post a job for free.
                    </p>
                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <Link
                            to="/vacancy"
                            className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg sm:w-auto hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300"
                        >
                            Open Vacancy
                        </Link>
                    </div>
                </div>

                {/* Image section */}
                <div className="relative lg:col-span-5 flex items-center justify-center">
                    <img src="/img/hero-img.jpg" alt="hero image" className="relative rounded-lg shadow-lg z-20" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
