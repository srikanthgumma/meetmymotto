/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(255, 120, 255, .9), rgba(255, 60, 255, 0.3)), url('assets/ugc.jpg')",
        'service-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, .9), rgba(43, 108, 176, 0.9)), url('assets/gymgirl1.png')",

        'gallery-pattern1': "url('assets/img-12.jpg')",

        'gallery-pattern2': "url('assets/img-14.jpg')",

        'gallery-pattern3': "url('assets/img-19.jpg')",

        'gallery-pattern4': "url('assets/img-16.jpg')",

        'gallery-pattern5': "url('assets/img-17.jpg')",

        'footer-pattern':
          "linear-gradient(to right bottom, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.8)), url('assets/img-7.jpg')",

      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
    keyframes: {
      rotate: {
        '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
        '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
      }
      ,
      wiggle: {
        '0%, 100%': { transform: 'rotate(-12deg)' },
        '50%': { transform: 'rotate(12deg)' },
      },
      morph: {
        '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
        '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
    },
    float: {
        '0%, 100%': { transform: 'translateY(0) scale(1)' },
        '50%': { transform: 'translateY(-40px) scale(1.05)' }
    },
    gradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '100%': { backgroundPosition: '100% 50%' }
    },
    reveal: {
        '0%': { transform: 'translateY(20px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 }
    },
    slide: {
        '0%': { transform: 'translateX(-20px)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 }
    },
    scale: {
        '0%': { transform: 'scale(0.95)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 }
    }
    },
    animation: {
      rotate: 'rotate 30s linear infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
      'morph': 'morph 8s ease-in-out infinite',
      'float': 'float 12s ease-in-out infinite',
      'gradient': 'gradient 8s linear infinite',
      'reveal': 'reveal 1.5s cubic-bezier(0.2, 1, 0.3, 1)',
      'slide': 'slide 1s cubic-bezier(0.2, 1, 0.3, 1)',
      'scale': 'scale 1s cubic-bezier(0.2, 1, 0.3, 1)',
    }


  },
  plugins: [
    require('flowbite/plugin')
  ],
}
