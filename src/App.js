import React, { useState } from 'react'
import Nav from './Components/Nav'
import TeamMembers from './Components/TeamMembers'
import Footer from './Components/Footer'
import Insights from './Components/Insights'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Clients from './Components/Clients'
import Contact from './Components/Contact'

const App = () => {
  const [nav, setNav] = useState(false)
  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop
    if (scroll > 605) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  })

   // Set the date we're counting down to (adjust the date and time)
   const countDownDate = new Date("Mar 28, 2025 00:00:00").getTime();

   // Update the countdown every 1 second
   const x = setInterval(function () {
     // Get the current date and time
     const now = new Date().getTime();
 
     // Calculate the time remaining
     const distance = countDownDate - now;
 
     // Calculate days, hours, minutes, and seconds
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
     // Display the countdown in the HTML
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;
 
     // If the countdown is over, display a message
     if (distance < 0) {
       clearInterval(x);
       document.getElementById("countdown").innerHTML = "EXPIRED";
     }
   }, 1000);

  return (
    <div className='App'>

<div
  class="h-screen w-full flex flex-col justify-center items-center bg-gray-900 dark:bg-gradient-to-r from-blue-400 to-cyan-300">
  <div
    class="absolute animate-bounce z-10 w-full mt-2 h-[5%] flex justify-center items-end bg-gray-900 dark:bg-gradient-to-r from-blue-400 to-cyan-300">
    <h1 class="sm:text-9xl text-7xl font-extrabold animate-[wiggle_1s_ease-in-out_infinite] text-indigo-500 font-mono">
      Coming</h1>
  </div>
  <div
    class="absolute w-full h-[20%] flex items-end justify-center bg-gray-900 dark:bg-gradient-to-r from-blue-400 to-cyan-300">
    <h1
      class="sm:text-7xl text-5xl animate-[wiggle_1s_ease-in-out_infinite] text-center text-white dark:text-gray-600 font-extrabold">
      Soon</h1>
  </div>

  <div id="countdown"
    class="absolute top-40  flex items-center justify-center text-gray-200 dark:text-white sm:text-5xl text-3xl">
    <span id="days" ></span>
    <span class="text-rose-500 font-semibold pr-2">D</span>
    <span id="hours"></span>
    <span class="text-green-500 font-semibold pr-2">H</span>
    <span id="minutes"></span>
    <span class="text-sky-500 font-semibold pr-2">M</span>
    <span id="seconds"></span>
    <span class="text-yellow-500 font-semibold pr-2">S</span>
  </div>
</div>

      {/* // <Nav nav={nav} />
      // <Home />
      // <AboutUs />
      // <Clients />
      // <Insights />
      // <Footer nav={nav} /> */}
    </div>
  )
}

export default App