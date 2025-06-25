'use client';

import React, {useState, useEffect, useRef} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import MenuSlider from '@/pages/home-page/MenuSlider';

export default function SidebarMenu() {
    const [open, setOpen] = useState(true);
    const [fixedSidebar, setFixedSidebar] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const sidebarWidth = open ? 288 : 80;

    const toggleSidebar = () => setOpen(!open);

    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;
            const top = contentRef.current.getBoundingClientRect().top;
            setFixedSidebar(top <= 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="hidden lg:block">
                {/* Navbar */}
                <div className="w-full">
                    <Navbar />
                </div>

                {/* Layout */}
                <div className="flex bg-white shadow min-h-screen relative">
                    {/* Sidebar Wrapper */}
                    <div
                        className="relative"
                        style={{
                            width: `${sidebarWidth}px`,
                            minWidth: `${sidebarWidth}px`,
                            maxWidth: `${sidebarWidth}px`,
                        }}
                    >
                        {/* Sidebar */}
                        <div
                            className={clsx(
                                'bg-white z-40 overflow-y-auto overflow-x-hidden transition-all duration-300 px-4 py-6',
                                fixedSidebar ? 'fixed top-0 left-0 h-screen' : ''
                            )}
                            style={{ width: `${sidebarWidth}px` }}
                        >
                            <button
                                onClick={toggleSidebar}
                                className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                            >
                                <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
                                    <path
                                        d="M0 20V16.6667H30V20H0ZM0 11.6667V8.33333H30V11.6667H0ZM0 3.33333V0H30V3.33333H0Z"
                                        fill="black"
                                    />
                                </svg>
                                <span className={clsx('text-sm font-medium', !open && 'hidden')}>Menu</span>
                            </button>

                            <nav className="mt-10 space-y-6">
                                <button className="flex items-center border border-[#53535333] w-full px-3 py-2 text-sm rounded-full hover:bg-gray-100 transition">
                        <span className={clsx('text-sm lg:text-lg flex flex-row gap-x-4', !open && 'hidden')}>
                            <span>
                                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5 3C13.4011 2.99961 11.3389 3.54973 9.51908 4.59544C7.69927 5.64115 6.18556 7.14588 5.12903 8.95943C4.07251 10.773 3.51012 12.8319 3.49801 14.9307C3.4859 17.0296 4.02449 19.0949 5.06001 20.9205C5.75993 20.0109 6.65966 19.2744 7.68964 18.768C8.71962 18.2616 9.85226 17.9988 11 18H20C21.1477 17.9988 22.2804 18.2616 23.3104 18.768C24.3403 19.2744 25.2401 20.0109 25.94 20.9205C26.9755 19.0949 27.5141 17.0296 27.502 14.9307C27.4899 12.8319 26.9275 10.773 25.871 8.95943C24.8144 7.14588 23.3007 5.64115 21.4809 4.59544C19.6611 3.54973 17.5989 2.99961 15.5 3ZM27.4145 24.114C27.6025 23.869 27.7825 23.618 27.9545 23.361C29.6174 20.89 30.5039 17.9784 30.5 15C30.5 6.7155 23.7845 0 15.5 0C7.21551 0 0.500015 6.7155 0.500015 15C0.495288 18.2951 1.58007 21.4994 3.58551 24.114L3.57801 24.141L4.11051 24.7605C5.51734 26.4053 7.26409 27.7254 9.23036 28.63C11.1966 29.5345 13.3357 30.0019 15.5 30C15.824 30 16.146 29.99 16.466 29.97C19.1726 29.7993 21.7815 28.8944 24.0125 27.3525C25.0795 26.6164 26.0465 25.7452 26.8895 24.7605L27.422 24.141L27.4145 24.114ZM15.5 6C14.3065 6 13.1619 6.4741 12.318 7.31802C11.4741 8.16193 11 9.30652 11 10.5C11 11.6935 11.4741 12.8381 12.318 13.682C13.1619 14.5259 14.3065 15 15.5 15C16.6935 15 17.8381 14.5259 18.682 13.682C19.5259 12.8381 20 11.6935 20 10.5C20 9.30652 19.5259 8.16193 18.682 7.31802C17.8381 6.4741 16.6935 6 15.5 6Z" fill="#535353" />
                                </svg>
                            </span>
                            Sign in
                        </span>
                                </button>

                                {[
                                    { label: 'Home', icon: HomeIcon, link: '/home' },
                                    { label: 'Blogs', icon: BlogIcon, link: '/blogs' },
                                    { label: 'Promotions', icon: PromoIcon, link: '/promotions' },
                                ].map(({ label, icon: Icon, link }, idx) => (
                                    <Link
                                        key={idx}
                                        href={link}
                                        className="flex items-center gap-x-6 px-3 py-2.5 rounded-full hover:bg-gray-100 transition"
                                        title={!open ? label : undefined}
                                    >
                                        <Icon />
                                        <span className={clsx('text-sm lg:text-lg font-medium', !open && 'hidden')}>
                                {label}
                            </span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div
                        ref={contentRef}
                        className="flex-1 lg:w-[20%] transition-all bg-[#f6f6f6] duration-300"
                    >
                        <MenuSlider />
                    </div>
                </div>
            </div>
            {/*small device */}
            <div className={`lg:hidden block`} >
                <Navbar/>
            </div>
        </>
    );
}

// Icons
function HomeIcon() {
    return (
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none">
            <path d="M10.1 20V12.9412H14.9V20H20.9V10.5882H24.5L12.5 0L0.5 10.5882H4.1V20H10.1Z" fill="black"/>
        </svg>
    );
}

function BlogIcon() {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.2778 2.22222V17.7778H2.72222V2.22222H18.2778ZM20.5 0H0.5V20H20.5V0ZM16.0556 15.5556H4.94444V14.4444H16.0556V15.5556ZM16.0556 13.3333H4.94444V12.2222H16.0556V13.3333ZM16.0556 10H4.94444V4.44444H16.0556V10Z"
                fill="black"/>
        </svg>

    );
}

function PromoIcon() {
    return (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.5 4.5H2.5C1.96957 4.5 1.46086 4.71071 1.08579 5.08579C0.710714 5.46086 0.5 5.96957 0.5 6.5V10.5C0.5 11.0304 0.710714 11.5391 1.08579 11.9142C1.46086 12.2893 1.96957 12.5 2.5 12.5H3.5V16.5C3.5 16.7652 3.60536 17.0196 3.79289 17.2071C3.98043 17.3946 4.23478 17.5 4.5 17.5H6.5C6.76522 17.5 7.01957 17.3946 7.20711 17.2071C7.39464 17.0196 7.5 16.7652 7.5 16.5V12.5H10.5L15.5 16.5V0.5L10.5 4.5ZM20 8.5C20 10.21 19.04 11.76 17.5 12.5V4.5C19.03 5.25 20 6.8 20 8.5Z"
                fill="black"/>
        </svg>

    );
}
