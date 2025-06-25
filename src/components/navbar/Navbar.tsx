"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FaSearch} from "react-icons/fa";

const images: string[] = [
    "/images/home-page/banner/banner.png",
    "/images/home-page/banner/banner.png",
];

const Navbar: React.FC = () => {
    const [current, setCurrent] = useState<number>(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full mx-auto relative">
            {/* --- Overlay Search/Logo/Buttons --- */}
            {/*large device */}
            <div className="absolute z-50 lg:block hidden top-10 w-full px-4">
                <div className="font-poppins max-w-7xl mx-auto rounded-lg p-3">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        {/* --- Logo --- */}
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/images/logo/logo.png"
                                width={160}
                                height={80}
                                alt="Logo"
                                className="object-contain"
                            />
                        </Link>

                        {/* --- Desktop Search --- */}
                        <div className="flex items-center gap-4 flex-1 justify-center">
                            <div className="w-full flex flex-row rounded-full items-center bg-gray-300 px-1 py-1">
                                <input
                                    type="text"
                                    placeholder="Search services"
                                    className="w-full px-4 py-1 rounded-md bg-transparent focus:outline-none"
                                />
                                <div className="w-[1px] h-8 bg-gray-400 mx-2"/>
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-full px-4 py-1 rounded-md bg-transparent focus:outline-none"
                                />
                                <button
                                    className="flex cursor-pointer items-center gap-2 btnColor text-white py-3 px-7 lg:text-lg text-sm rounded-[35px]">
                                    <FaSearch/>
                                    <span className=" md:inline">Search</span>
                                </button>
                            </div>
                        </div>

                        {/* --- Sign In Button --- */}
                        <div className="">
                            <button className="btnColor cursor-pointer text-white py-4 lg:text-lg px-7 rounded-[35px]">
                                Sign in to your account
                            </button>
                        </div>


                    </div>
                </div>
            </div>

            {/* --- Banner Section --- */}
            <div className="relative w-full h-[80vh] hidden lg:block  overflow-hidden">
                <Image
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    fill
                    className="object-cover"
                    priority
                />

                {/* --- Prev Button --- */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="absolute z-50 top-1/2 cursor-pointer left-4 -translate-y-1/2 bg-white bg-opacity-80 text-black flex justify-center items-center w-11 h-11 rounded-full hover:bg-opacity-90 transition"
                >
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                        <path
                            d="M12 14.2854V1.71458C12 1.37045 11.8815 1.08178 11.6444 0.848587C11.4074 0.615389 11.1309 0.499194 10.8148 0.500004C10.7161 0.500004 10.6121 0.514984 10.5031 0.544944C10.3941 0.574903 10.2906 0.620652 10.1926 0.68219L0.533344 6.9676C0.355567 7.08906 0.222034 7.24088 0.132751 7.42306C0.0434666 7.60525 -0.000779152 7.79756 1.04904e-05 7.99999C0.000801086 8.20242 0.0450468 8.39472 0.132751 8.57691C0.220454 8.7591 0.353987 8.91092 0.533344 9.03237L10.1926 15.3178C10.2914 15.3785 10.3949 15.4243 10.5031 15.455C10.6114 15.4858 10.7153 15.5008 10.8148 15.5C11.1309 15.5 11.4074 15.3834 11.6444 15.1502C11.8815 14.917 12 14.6287 12 14.2854Z"
                            fill="black"
                        />
                    </svg>
                </button>

                {/* --- Next Button --- */}
                <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="absolute z-50 cursor-pointer top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 text-black flex justify-center items-center w-11 h-11 rounded-full hover:bg-opacity-90 transition"
                >
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                        <path
                            d="M0 14.2854V1.71458C0 1.37045 0.118519 1.08178 0.355555 0.848587C0.592592 0.615389 0.869135 0.499194 1.18518 0.500004C1.28395 0.500004 1.38785 0.514984 1.49689 0.544944C1.60592 0.574903 1.70943 0.620652 1.80741 0.68219L11.4667 6.9676C11.6444 7.08906 11.778 7.24088 11.8672 7.42306C11.9565 7.60525 12.0008 7.79756 12 7.99999C11.9992 8.20242 11.955 8.39472 11.8672 8.57691C11.7795 8.7591 11.646 8.91092 11.4667 9.03237L1.80741 15.3178C1.70864 15.3785 1.60513 15.4243 1.49689 15.455C1.38864 15.4858 1.28474 15.5008 1.18518 15.5C0.869135 15.5 0.592592 15.3834 0.355555 15.1502C0.118519 14.917 0 14.6287 0 14.2854Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>


            {/*small device */}

            <div className="lg:hidden block">
                {/* Slider Section */}
                <div className="relative w-full h-[300px] overflow-hidden">
                    <Image
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Search Box Positioned at Center */}
                    <div className="absolute flex flex-col inset-0 space-y-4 items-center justify-center px-4">
                        {/* Input 1 */}
                        <input
                            type="text"
                            placeholder="Search services"
                            className="w-[85%] max-w-sm py-2 rounded-full border  outline-none text-sm px-4 mx-auto bg-white bg-opacity-80"
                        />

                        {/* Input 2 */}
                        <input
                            type="text"
                            placeholder="Search location"
                            className="w-[85%] max-w-sm py-2 rounded-full border  outline-none text-sm px-4 mx-auto bg-white bg-opacity-80"
                        />

                        {/* Buttons */}
                        <div className="text-white text-sm flex flex-col gap-3">
                            <button className="btnColor py-2 px-6 rounded-full">
                                Search
                            </button>
                            <button className="btnColor py-2 px-6 rounded-full">
                                Sign in to your account
                            </button>
                        </div>
                    </div>

                    {/* --- Prev Button --- */}
                    <button
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                        className="absolute z-50 top-1/2 cursor-pointer left-3 -translate-y-1/2 bg-white bg-opacity-80 text-black flex justify-center items-center w-6 h-6 rounded-full hover:bg-opacity-90 transition"
                    >
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="64" height="64" rx="32" transform="matrix(-1 0 0 1 64 0)" fill="white" fill-opacity="0.6"/>
                            <path d="M38 38.2854V25.7146C38 25.3704 37.8815 25.0818 37.6444 24.8486C37.4074 24.6154 37.1309 24.4992 36.8148 24.5C36.7161 24.5 36.6121 24.515 36.5031 24.5449C36.3941 24.5749 36.2906 24.6207 36.1926 24.6822L26.5333 30.9676C26.3556 31.0891 26.222 31.2409 26.1328 31.4231C26.0435 31.6053 25.9992 31.7976 26 32C26.0008 32.2024 26.045 32.3947 26.1328 32.5769C26.2205 32.7591 26.354 32.9109 26.5333 33.0324L36.1926 39.3178C36.2914 39.3785 36.3949 39.4243 36.5031 39.455C36.6114 39.4858 36.7153 39.5008 36.8148 39.5C37.1309 39.5 37.4074 39.3834 37.6444 39.1502C37.8815 38.917 38 38.6287 38 38.2854Z" fill="black"/>
                        </svg>

                    </button>

                    {/* --- Next Button --- */}
                    <button
                        onClick={nextSlide}
                        aria-label="Next Slide"
                        className="absolute z-50 top-1/2 right-3 -translate-y-1/2 bg-white bg-opacity-80 text-black flex justify-center items-center w-6 h-6 rounded-full hover:bg-opacity-90 transition"
                    >
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="64" height="64" rx="32" transform="matrix(-1 0 0 1 64 0)" fill="white" fill-opacity="0.6"/>
                            <path d="M38 38.2854V25.7146C38 25.3704 37.8815 25.0818 37.6444 24.8486C37.4074 24.6154 37.1309 24.4992 36.8148 24.5C36.7161 24.5 36.6121 24.515 36.5031 24.5449C36.3941 24.5749 36.2906 24.6207 36.1926 24.6822L26.5333 30.9676C26.3556 31.0891 26.222 31.2409 26.1328 31.4231C26.0435 31.6053 25.9992 31.7976 26 32C26.0008 32.2024 26.045 32.3947 26.1328 32.5769C26.2205 32.7591 26.354 32.9109 26.5333 33.0324L36.1926 39.3178C36.2914 39.3785 36.3949 39.4243 36.5031 39.455C36.6114 39.4858 36.7153 39.5008 36.8148 39.5C37.1309 39.5 37.4074 39.3834 37.6444 39.1502C37.8815 38.917 38 38.6287 38 38.2854Z" fill="black"/>
                        </svg>

                    </button>
                </div>
            </div>


        </div>
    );
};

export default Navbar;
