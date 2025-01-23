import React, { useEffect } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";

const Services = () => {
  document.querySelectorAll('[id^="question"]').forEach(function (button, index) {
    button.addEventListener('click', function () {
      var answer = document.getElementById('answer' + (index + 1));
      var arrow = document.getElementById('arrow' + (index + 1));

      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        answer.style.display = 'none';
        arrow.style.transform = 'rotate(-180deg)';
      }
    });
  });


  return (
    <section id='services' className='px-2 w-screen mb-40 bg-transparent mt-28 z-0 '>

      <div className=' lg:px-8   grid lg:grid-cols-3 gap-4 '>
        <div className=' bg-blue-950 shadow-sm hover:shadow-lg shadow-black h-fit   hover:shadow-black rounded-3xl'>
          <div id="default-carousel" class="relative w-full -z-0" data-carousel="slide">
            <div class="relative h-64 overflow-hidden rounded-lg md:h-80">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/20231015_192934.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/20231015_193043.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0029.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0031.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0042.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0053.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0054.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0058.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0059.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/posts/IMG-20240927-WA0060.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 10" data-carousel-slide-to="9"></button>

            </div>
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60  group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60   group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
          <div >
            <h1 className='text-white font-bold text-2xl text-center leading-7 py-4 px-1'>Design motivational success inspirational quotes for All Social Media</h1>
            <p className='text-gray-400 text-xs px-2'>
              We will provide custom or ready-made motivation and success quotes with a unique and eye-catching design for all social media platforms.
            </p>
            <div
              class="relative shadow-xl ring-1 ring-blue-900/5  sm:rounded-lg px-2">
              <div >
                <div class=" grid  divide-y divide-neutral-200">
                  <div class="py-5">
                    <details class="group">
                      <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className='text-gray-300'> WHY YOU SHOULD CHOOSE US?</span>
                        <span class="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                            stroke="gray" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="group-open:animate-fadeIn mt-3 text-gray-300 text-left leading-6  w-fit text-sm">

                        * Do Market Research based on client's niche before getting into work.<br />

                        * Each order will be delivered with different styles of quotes.<br />

                        * Unique, eye-catching design and high in quality.<br />

                        * Provide best resolution image format (1080*1080) for all platforms.<br />

                        * Deliver the content desired by my client in time, no delay in the delivery.<br />

                        * Available for all niches.<br />

                      </p>
                      {/* <div class="py-5">
                        <details class="group">
                          <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className='text-white'> Can I get a refund for my subscription?</span>
                            <span class="transition group-open:rotate-180">
                              <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span>
                          </summary>
                          <p class="group-open:animate-fadeIn mt-3 text-white">We offer a 30-day money-back
                            guarantee for most of its subscription plans. If you are not satisfied with your
                            subscription within the first 30 days, you can request a full refund. Refunds for
                            subscriptions that have been active for longer than 30 days may be considered on a
                            case-by-case basis.
                          </p>
                        </details>
                      </div> */}
                    </details>
                  </div>
                </div>
                <div className='pb-8 flex justify-around w-full'>
                  <a href='https://www.fiverr.com/s/6Ye0oKB' className='hover:bg-[#d2eb44] bg-[#a6bd24] text-sm rounded-xl flex items-center justify-center gap-1  px-2 py-2 text-black font-bold'><TbBrandFiverr size={20} /> Place Order</a>
                  <a href='https://wa.me/message/RRMBJAANXTFTL1' className='hover:bg-[#d2eb44] bg-[#a6bd24] flex items-center justify-center gap-1 text-sm rounded-xl px-2 py-2 text-black font-bold'><IoLogoWhatsapp size={20} />Chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-blue-950 shadow-sm hover:shadow-lg shadow-black h-fit  hover:shadow-black rounded-3xl'>
          <div id="default-carousel" class="relative w-full -z-0" data-carousel="slide">
            <div class="relative h-64 overflow-hidden rounded-lg md:h-80">
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/1.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/2.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/3.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/4.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/5.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/6.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/7.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted='true'>
                  <source src={require('../assets/videos/8.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/9.mp4')} type="video/mp4" />
                </video>
              </div>
              <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <video className='w-full h-full object-contain' autoPlay loop muted>
                  <source src={require('../assets/videos/10.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 10" data-carousel-slide-to="0"></button>

            </div>
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60  group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60   group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
          <div >
            <h1 className='text-white font-bold text-2xl lg:text-center leading-7 py-4 px-1'>Design motivational success inspirational reels for All Social Media</h1>
            <p className='text-gray-300 text-xs px-2'>
              We will provide custom or ready-made motivation and success quotes with a unique and eye-catching design for all social media platforms.
            </p>
            <div
              class="relative shadow-xl ring-1 ring-blue-900/5  sm:rounded-lg px-2">
              <div >
                <div class=" grid  divide-y divide-neutral-200">
                  <div class="py-5">
                    <details class="group">
                      <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className='text-gray-300'> WHY YOU SHOULD CHOOSE US?</span>
                        <span class="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                            stroke="gray" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="group-open:animate-fadeIn mt-3 text-gray-300 text-left leading-6  w-fit text-sm">

                        * Do Market Research based on client's niche before getting into work.<br />

                        * Each order will be delivered with different styles of quotes.<br />

                        * Unique, eye-catching design and high in quality.<br />

                        * Provide best resolution image format (1080*1080) for all platforms.<br />

                        * Deliver the content desired by my client in time, no delay in the delivery.<br />

                        * Available for all niches.<br />

                      </p>
                      {/* <div class="py-5">
                        <details class="group">
                          <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className='text-white'> Can I get a refund for my subscription?</span>
                            <span class="transition group-open:rotate-180">
                              <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span>
                          </summary>
                          <p class="group-open:animate-fadeIn mt-3 text-white">We offer a 30-day money-back
                            guarantee for most of its subscription plans. If you are not satisfied with your
                            subscription within the first 30 days, you can request a full refund. Refunds for
                            subscriptions that have been active for longer than 30 days may be considered on a
                            case-by-case basis.
                          </p>
                        </details>
                      </div> */}
                    </details>
                  </div>
                </div>
                <div className='pb-8 flex justify-around w-full'>
                  <a href='https://www.fiverr.com/s/6Ye0oKB' className='hover:bg-[#d2eb44] bg-[#a6bd24] text-sm rounded-xl flex items-center justify-center gap-1  px-2 py-2 text-black font-bold'><TbBrandFiverr size={20} /> Place Order</a>
                  <a href='https://wa.me/message/RRMBJAANXTFTL1' className='hover:bg-[#d2eb44] bg-[#a6bd24] flex items-center justify-center gap-1 text-sm rounded-xl px-2 py-2 text-black font-bold'><IoLogoWhatsapp size={20} />Chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-blue-950 shadow-sm hover:shadow-lg shadow-black h-fit hover:shadow-black rounded-3xl'>
          {/* <img className='rounded-t-2xl' src={require('../assets/3.png')} width='100%' height='700' /> */}
          <div id="default-carousel" class="relative w-full -z-0" data-carousel="slide">
            <div class="relative h-64 overflow-hidden rounded-lg md:h-80">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/14_20250121_210117_0013.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/1_20250121_192322_0000.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/1_20250121_205453_0000.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/1_20250121_211131_0000.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/3_20250121_210116_0002.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/H_20250121_191256_0003.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/SIX FIGURES IS_20250121_190328_0007.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/2_20250121_211008_0001.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/20250117_202318.jpg')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={require('../assets/infographics/7_20250121_211309_0006.png')} class="absolute block w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" class="" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 8" data-carousel-slide-to="7"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 9" data-carousel-slide-to="8"></button>
              <button type="button" class="" aria-current="false" aria-label="Slide 10" data-carousel-slide-to="9"></button>

            </div>
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60  group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60   group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
          <div >
            <h1 className='text-white font-bold text-2xl text-center leading-7 py-4 px-1'>Design inspirational success business Infographics for All Social Media</h1>
            <p className='text-white text-center text-xs px-2'>
              We will provide custom or ready-made motivation and success quotes with a unique and eye-catching design for all social media platforms.
            </p>
            <div
              class="relative shadow-xl ring-1 ring-blue-900/5  sm:rounded-lg px-2">
              <div >
                <div class=" grid  divide-y ">
                  <div class="py-5">
                    <div id="accordion-nested-parent" data-accordion="collapse">
                      <h2 id="accordion-collapse-heading-1">
                        <button type="button" class="flex items-center bg-transparent  justify-between w-full px-2 font-medium    " data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                          <span className='text-gray-300'>WHY YOU SHOULD CHOOSE US?</span>
                          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                          </svg>
                        </button>
                      </h2>
                      <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div class="dark:border-gray-700 ">

                          <p class="group-open:animate-fadeIn mt-3 text-gray-300 text-left leading-6  w-fit text-sm">

                            * Do Market Research based on client's niche before getting into work.<br />

                            * Each order will be delivered with different styles of quotes.<br />

                            * Unique, eye-catching design and high in quality.<br />

                            * Provide best resolution image format (1080*1080) for all platforms.<br />

                            * Deliver the content desired by my client in time, no delay in the delivery.<br />

                            * Available for all niches.<br />

                          </p>
                          {/* <div id="accordion-nested-collapse" data-accordion="collapse">
                            <h2 id="accordion-nested-collapse-heading-1">
                              <button type="button" class="flex items-center justify-between w-full p-5 rounded-t-xl font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-1" aria-expanded="false" aria-controls="accordion-nested-collapse-body-1">
                                <span>Open source</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                              </button>
                            </h2>
                            <div id="accordion-nested-collapse-body-1" class="hidden" aria-labelledby="accordion-nested-collapse-heading-1">
                              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p class="text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.</p>
                              </div>
                            </div>
                            <h2 id="accordion-nested-collapse-heading-2">
                              <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-2" aria-expanded="false" aria-controls="accordion-nested-collapse-body-2">
                                <span>Architecture</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                              </button>
                            </h2>
                            <div id="accordion-nested-collapse-body-2" class="hidden" aria-labelledby="accordion-nested-collapse-heading-2">
                              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p class="text-gray-500 dark:text-gray-400">Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                              </div>
                            </div>
                            <h2 id="accordion-nested-collapse-heading-3">
                              <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-nested-collapse-body-3" aria-expanded="false" aria-controls="accordion-nested-collapse-body-3">
                                <span>Can I use both?</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                              </button>
                            </h2>
                            <div id="accordion-nested-collapse-body-3" class="hidden" aria-labelledby="accordion-nested-collapse-heading-3">
                              <div class="p-5 border border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">We actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                  <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                  <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                </ul>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='pb-8 flex justify-around w-full'>
                  <a href='https://www.fiverr.com/s/6Ye0oKB' className='hover:bg-[#d2eb44] bg-[#a6bd24] text-sm rounded-xl px-2 py-2 text-black font-bold flex items-center justify-center gap-1 '><TbBrandFiverr size={20} /> Place Order</a>
                  <a href='https://wa.me/message/RRMBJAANXTFTL1' className='hover:bg-[#d2eb44] bg-[#a6bd24] text-sm rounded-xl px-2 py-2 text-black font-bold  flex items-center justify-center gap-1'><IoLogoWhatsapp size={20} />Chat</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Services