'use client';

import React, {useState} from 'react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {GrNext, GrPrevious} from 'react-icons/gr';
import Link from "next/link";
import 'swiper/css/autoplay';
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';

const MenuSlider = () => {
    const reviews = [
        {name: 'All'},
        {name: 'Beauty esthetics'},
        {name: 'Restaurant & Catering'},
        {name: 'Hair stylists'},
        {name: 'Supermarket malls'},
        {name: 'Electronic stores'},
        {name: 'Auto mechanics'},
        {name: 'Antiques'},
        {name: 'Medical doctors'},
        {name: 'Medical doctors'},
        {name: 'Medical doctors'},
    ];

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const toggleSelection = (name: string) => {
        setSelectedItems(prev =>
            prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
        );
    };

    // promotion video
    type PromotionVideo = {
        image: string;
        title: string;
        chanelName: string;
        totalViews: string;
        time: string;
        ownerImg: string;
    };

    const promotionVideoData: PromotionVideo[] = [
        {
            image: "/images/home-page/promotion/promotion-1.jpg",
            title: "Video title goes here",
            chanelName: "Channel name",
            totalViews: '22k views',
            time: "10 hours ago",
            ownerImg: "/images/home-page/promotion/promotion-1.jpg",
        },
        {
            image: "/images/home-page/promotion/promotion-2.jpg",
            title: "Video title goes here",
            chanelName: "Channel name",
            totalViews: '22k views',
            time: "10 hours ago",
            ownerImg: "/images/home-page/promotion/promotion-1.jpg",
        },
        {
            image: "/images/home-page/promotion/promotion-3.jpg",
            title: "Video title goes here",
            chanelName: "Channel name",
            totalViews: '22k views',
            time: "10 hours ago",
            ownerImg: "/images/home-page/promotion/promotion-1.jpg",
        }, {
            image: "/images/home-page/promotion/promotion-3.jpg",
            title: "Video title goes here",
            chanelName: "Channel name",
            totalViews: '22k views',
            time: "10 hours ago",
            ownerImg: "/images/home-page/promotion/promotion-1.jpg",
        }, {
            image: "/images/home-page/promotion/promotion-3.jpg",
            title: "Video title goes here",
            chanelName: "Channel name",
            totalViews: '22k views',
            time: "10 hours ago",
            ownerImg: "/images/home-page/promotion/promotion-1.jpg",
        }, {
            image: "/images/home-page/promotion/promotion-3.jpg",
            title: "Video title goes here",
            chanelName: "Channel name",
            totalViews: '22k views',
            time: "10 hours ago",
            ownerImg: "/images/home-page/promotion/promotion-1.jpg",
        }
    ];


    return (
        <div className="px-6 md:px-9 md:mt-8 relative">
            {/* Swiper Slider */}
            <div className="relative w-full overflow-x-auto ">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        480: {slidesPerView: 2},
                        768: {slidesPerView: 3},
                        1024: {slidesPerView: 4},
                        1280: {slidesPerView: 5},
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {reviews.map((item, i) => (
                        <SwiperSlide key={i}>
                            <button
                                onClick={() => toggleSelection(item.name)}
                                className={`text-sm cursor-pointer px-5 w-[190px]  py-2 rounded-full border transition whitespace-nowrap 
                                    ${selectedItems.includes(item.name)
                                    ? 'bg-red-500 text-white border-red-500'
                                    : 'bg-[] text-black border-[#00000033]'
                                }`}
                            >
                                {item.name}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons - centered and larger */}
                <div className={``}>
                    <button
                        className="swiper-button-prev absolute left-0 top-1/2 mt-20 -translate-y-1/2"
                        aria-label="Previous"
                    >
                        <GrPrevious size={14}/>
                    </button>

                    <button
                        className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2"
                        aria-label="Next"
                    >
                        <GrNext size={14}/>
                    </button>
                </div>
            </div>


            {/* Promotional videos section */}
            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h1 className={`lg:text-2xl text-xl font-medium  `}>Promotional videos</h1>
                    <Link href={""}>
                        <button
                            className="flex cursor-pointer items-center border border-[#EF4444] text-[16px] text-[#EF4444] py-2 px-6 rounded-3xl gap-x-3">
                            See all
                            <span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.0207234 10.9409L8.52472 2.43693L2.00021 2.51832L2.02579 0.468172L12.0503 0.34312L11.9253 10.3677L9.87514 10.3932L9.95653 3.86873L1.45253 12.3727L0.0207234 10.9409Z"
                                    fill="#EF4444"/>
                            </svg>
                        </span>
                        </button>
                    </Link>
                </div>
                {/*slider*/}
                <div className="mt-5 ">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{delay: 3000, disableOnInteraction: false}}
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            320: {slidesPerView: 1},
                            640: {slidesPerView: 2},
                            1024: {slidesPerView: 3},
                        }}
                    >
                        {promotionVideoData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative rounded-[20px] overflow-hidden">
                                    <Image
                                        src={item?.image}
                                        alt={item?.title}
                                        width={469}
                                        height={264}
                                        className="w-full object-cover rounded-[20px]"
                                    />

                                    {/* Promoted Badge */}
                                    <button
                                        className="absolute top-4 right-4 flex items-center gap-x-2 px-4 py-2 bg-red-500 rounded-[20px] text-white text-sm font-medium shadow">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.08745 5.4011L3.35472 5.53497C2.87257 5.57223 2.44316 5.82493 2.17652 6.22825L0.178212 9.25058C-0.0240136 9.55643 -0.0561619 9.9392 0.0921578 10.2745C0.240516 10.6098 0.545398 10.8435 0.907701 10.8996L2.49422 11.1453C2.86535 9.17581 3.75378 7.21113 5.08745 5.4011Z"
                                                fill="white"/>
                                            <path
                                                d="M8.85466 17.5058L9.1004 19.0923C9.15653 19.4546 9.3902 19.7595 9.72548 19.9078C9.86497 19.9695 10.0126 20 10.1595 20C10.3659 20 10.5708 19.9399 10.7495 19.8218L13.7719 17.8235C14.1752 17.5568 14.4279 17.1274 14.4651 16.6453L14.5989 14.9126C12.7889 16.2463 10.8242 17.1347 8.85466 17.5058Z"
                                                fill="white"/>
                                            <path
                                                d="M8.25806 16.4062C8.31314 16.4062 8.36853 16.4016 8.4238 16.3924C9.24895 16.2545 10.0443 16.022 10.8029 15.7178L4.28226 9.19715C3.97804 9.95578 3.74562 10.7511 3.60765 11.5763C3.55328 11.9016 3.66238 12.2329 3.89554 12.4661L7.53396 16.1045C7.72756 16.2981 7.98884 16.4062 8.25806 16.4062Z"
                                                fill="white"/>
                                            <path
                                                d="M18.4053 8.86726C20.0009 5.78235 20.06 2.52237 19.9766 0.993471C19.9481 0.469607 19.5304 0.0519529 19.0065 0.0233983C18.7576 0.00980464 18.4625 0 18.13 0C16.4204 0 13.7153 0.258944 11.1327 1.59476C9.0803 2.65635 6.38902 4.99388 4.80122 8.06582C4.81996 8.08047 4.83828 8.09601 4.85555 8.11328L11.8868 15.1445C11.904 15.1618 11.9195 15.18 11.9342 15.1988C15.0061 13.6109 17.3437 10.9197 18.4053 8.86726ZM11.6287 4.2281C12.7709 3.08588 14.6296 3.08577 15.7719 4.2281C16.3252 4.78142 16.6299 5.51716 16.6299 6.29969C16.6299 7.08223 16.3252 7.81797 15.7719 8.37128C15.2008 8.94234 14.4504 9.22792 13.7003 9.228C12.95 9.22804 12.1999 8.94249 11.6287 8.37128C11.0754 7.81797 10.7706 7.08223 10.7706 6.29969C10.7706 5.51716 11.0754 4.78142 11.6287 4.2281Z"
                                                fill="white"/>
                                            <path
                                                d="M12.4574 7.54263C13.1428 8.22798 14.258 8.22802 14.9434 7.54263C15.2753 7.2106 15.4582 6.76919 15.4582 6.29966C15.4582 5.83013 15.2753 5.38872 14.9434 5.05673C14.6007 4.71403 14.1505 4.5427 13.7004 4.5427C13.2503 4.5427 12.8001 4.71403 12.4574 5.05673C12.1255 5.38872 11.9426 5.83013 11.9426 6.29966C11.9426 6.76919 12.1254 7.21064 12.4574 7.54263Z"
                                                fill="white"/>
                                            <path
                                                d="M0.597817 16.4818C0.747779 16.4818 0.89774 16.4247 1.01212 16.3102L2.92513 14.3972C3.15396 14.1684 3.15396 13.7974 2.92513 13.5686C2.69634 13.3397 2.32532 13.3397 2.09649 13.5686L0.18348 15.4816C-0.0453489 15.7104 -0.0453489 16.0814 0.18348 16.3102C0.297894 16.4246 0.447856 16.4818 0.597817 16.4818Z"
                                                fill="white"/>
                                            <path
                                                d="M4.67834 15.3218C4.44955 15.0929 4.07853 15.0929 3.8497 15.3218L0.171761 18.9997C-0.0570677 19.2285 -0.0570677 19.5995 0.171761 19.8283C0.286176 19.9428 0.436137 19.9999 0.586098 19.9999C0.73606 19.9999 0.886021 19.9428 1.0004 19.8283L4.6783 16.1504C4.90717 15.9216 4.90717 15.5506 4.67834 15.3218Z"
                                                fill="white"/>
                                            <path
                                                d="M5.60274 17.0748L3.68977 18.9879C3.46094 19.2167 3.46094 19.5877 3.68977 19.8165C3.80418 19.9309 3.95414 19.9881 4.10407 19.9881C4.25399 19.9881 4.40399 19.931 4.51837 19.8165L6.43138 17.9035C6.66021 17.6747 6.66021 17.3037 6.43138 17.0748C6.20259 16.846 5.83157 16.846 5.60274 17.0748Z"
                                                fill="white"/>
                                        </svg>

                                        <span>Promoted</span>
                                    </button>
                                    <div className={`flex flex-row my-5 gap-x-5  `} >
                                        <div className={""} >
                                            {/*owner image */}
                                            <Image src={item.ownerImg} alt={item.chanelName} width={150} height={150} className={`object-cover w-[70px] h-[70px] rounded-full border border-black  `}/>
                                        </div>
                                        <div className={``} >
                                            <h1 className={` lg:text-lg text-[16px] font-medium text-[#000000] `} >{item.title}</h1>
                                            <p className={` text-sm font-medium text-[#000000] lg:text-[16px] `} >
                                                {item.chanelName}
                                            </p>
                                            <div className={`flex flex-row gap-x-2.5 items-center `} >
                                                <div><p className={`text-sm font-medium text-[#535353] lg:text-[14px]`} > {item.totalViews} </p></div>
                                                <div className={` w-2 h-2 rounded-full bg-[#D9D9D9] `} ></div>
                                                <div>
                                                    <p className={`text-sm font-medium text-[#535353] lg:text-[14px]`} >{item.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            {/*Beauty esthetics video section */}

        </div>
    );
};

export default MenuSlider;
