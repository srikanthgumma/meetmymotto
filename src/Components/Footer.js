import React from 'react'
import { TbArrowBigUpFilled } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { LiaFacebook } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialPinterestCircular } from "react-icons/ti"
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <section id='aboutus' className=' text-white m-0 w-full max-w-full bg-transparent'>
      {/* {nav ? <a href="#home"><div className='hover:bg-[#ff44ef] w-14 h-14 fixed right-10 bottom-10 text-2xl flex justify-center items-center rounded-full cursor-pointer bg-blue-900 '><TbArrowBigUpFilled /></div></a> : ""} */}
      <footer>
        <div className=" py-4 text-gray-400">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div class="lg:flex items-center justify-center ">
                <div class="lg:w-1/2 p-10">

                  <div class="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0 animate-reveal [animation-delay:1s]">
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="relative w-[280px] sm:w-[350px] lg:w-[400px] h-[280px] sm:h-[350px] lg:h-[400px] animate-morph">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-[inherit] border border-white/10 shadow-2xl"></div>

                        <div class="absolute inset-4 sm:inset-6 flex flex-col justify-between p-4 sm:p-6">
                          <div class="space-y-3 sm:space-y-4">
                            <div class="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 animate-pulse"></div>
                            <div class="h-1.5 sm:h-2 w-20 sm:w-24 bg-white/20 rounded-full"></div>
                            <div class="h-1.5 sm:h-2 w-24 sm:w-32 bg-white/10 rounded-full"></div>
                          </div>

                          <div class="flex justify-evenly">
                            <div class="space-y-2">
                              <div class="h-6 sm:h-8 w-20 sm:w-24 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20"></div>
                              <div class="h-1.5 sm:h-2 w-12 sm:w-16 bg-white/20 rounded-full"></div>
                            </div>
                            <FaYoutube color='gray' size={60} className='animate-float' />
                            {/* <div class="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 animate-float"></div> */}
                            <IoLogoInstagram color='gray' size={40} className='animate-float' />
                            <LiaFacebook color='gray' size={26} className='animate-float' />

                            <FaTwitter color='gray' size={26} className='animate-float' />
                            <TiSocialPinterestCircular color='gray' size={26} className='animate-float' />
                            <TiSocialLinkedinCircular color='gray' size={26} className='animate-float' />
                          </div>

                          <div class="space-y-2 sm:space-y-3">
                            <div class="h-1.5 sm:h-2 w-full bg-white/10 rounded-full"></div>
                            <div class="h-1.5 sm:h-2 w-3/4 bg-white/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/2 p-5">
                  <div class="text">
                    <span class="text-gray-300 border-b-2 border-indigo-600 uppercase">About us</span>

                    <p class="text-white mt-2">
                      MeetMyMotto is an innovative social media marketing company committed to helping businesses thrive in the digital landscape. Specializing in creating tailored strategies, MeetMyMotto focuses on enhancing brand visibility, audience engagement, and measurable growth.<br /><br />

                      The company offers a wide range of services, including content creation, social media management, paid advertising, influencer partnerships, and performance analytics. Their approach combines creativity with data-driven insights to deliver impactful campaigns that align with each client’s goals and values.<br /><br />

                      What sets MeetMyMotto apart is its dedication to authenticity and meaningful audience connections. By staying ahead of industry trends, the team ensures that every campaign maximizes engagement and return on investment. From eye-catching visuals to compelling storytelling, MeetMyMotto crafts strategies that resonate with audiences and foster brand loyalty.<br /><br />

                      With a focus on sustainable growth and long-term success, MeetMyMotto is the perfect partner for businesses looking to excel in today’s competitive social media environment.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-900 font-sans font-bold hover:text-white">Company</h2>
                </div>
                <ul className="leading-8 ">
                  <li><a href="#" className="hover:text-white font-sans">About Us</a></li>
                  <li><a href="#" className="hover:text-white font-sans">Terms &amp; Conditions</a></li>
                  <li><a href="#" className="hover:text-white font-sans">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white font-sans">Contact Us</a></li>
                </ul>
              </div> */}

              <div className="px-6 my-4 w-full sm:w-auto m-auto flex  justify-center items-center ">


                <a href="https://www.instagram.com/meetmymotto?igsh=MXg1aDdyZWY0bHhxOA==" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-3 hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>

                <a href="https://youtube.com/@meetmymotto?si=l0r14ps9246Q566u" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-4 text-gray-100">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left font-sans">
                Copyright © 2024- 2025 Meetmymotto. All Rights Reserved.
              </div>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left font-sans">
                Made with ❤️ by Srikanth Gummadi-<span className='text-xs'>the Founder</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer