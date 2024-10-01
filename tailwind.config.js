/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./blocks/**/*.{html,js,css}', './head.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geogrotesque'],
      },
      margin: {
        '512': '512px',
      },
      fontSize: {
        '36.1883' : '36.1883px',
        'xl-display': ['140px', '1'],
        'l-display': ['80px', '1.2'],
        alfa: ['64px', '1.2'],
        bravo: ['52px', '1.2'],
        charlie: ['40px', '1.3'],
        delta: ['32px', '1.3'],
        echo: ['24px', '1.3'],
        xl: ['20px', '30px'],
        lg: ['18px', '26px'],
        base: ['16px', '24px'],
        sm: ['14px', '20px'],
        captionLg: ['14px', '16px'],
        captionSm: ['12px', '14px'],
        mobXlDisplay: ['64px', '72px'],
        mobLDisplay: ['48px', '56px'],
        mobAlfa: ['34px', '42px'],
        mobBravo: ['31px', '38px'],
        mobCharlie: ['27px', '34px'],
        mobDelta: ['23px', '30px'],
        mobEcho: ['20px', '26px'],
        mobXl: ['23px', '30px'],
        mobLg: ['17px', '25px'],
        mobBase: ['15px', '23px'],
        mobSm: ['13px', '18px'],
        mobCaptionLg: ['13px', '16px'],
        mobCaptionSm: ['11px', '14px']
      },
      lineHeight: {
        '62.4': '62.4px',
        '43.4259': '43.4259px'
      },
      fontWeight: {
        thin: '270',
        light: '330',
        normal: '330',
        medium: '370',
        semibold: '400',
        bold: '450',
        bolder: '530',
        extrabold: '800',
        'extra-bold': '800',
        black: '900'
      },
      letterSpacing: {
        nav: '0.005em',
        tight: '-.01em',
        wide: '.005em',
        wider: '.1em',
        widest: '.3em',
        xlDisplay: '-1.4px',
        lDisplay: '-0.8px',
        lg: '0.048px',
        base: '0.08px',
        sm: '0.07px',
        captionLg: '1.4px',
        captionSm: '1.2px',
        mobLg: '0.085px',
        mobBase: '0.075px',
        mobSm: '0.065px',
        mobCaptionLg: '1.3px',
        mobCaptionSm: '1.1px',
      },
      spacing: {
        unset: 'unset',
        0: '0',
        px: '0.1rem',
        1: '1px',
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        19: '19px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        30: '30px',
        32: '32px',
        36: '36px',
        40: '40px',
        42: '42px',
        48: '48px',
        54: '54px',
        56: '56px',
        64: '64px',
        72: '72px',
        80: '80px',
        96: '96px',
        100: '100px',
        140: '140px',
        160: '160px',
        128: '128px',
        327: '327px',
        416: '416px',
        500: '500px',
        810: '810px',

        // desktop
        '1/12': '8.333%',
        '2/12': '16.667%',
        '3/12': '25%',
        '4/12': '33.333%',
        '5/12': '41.667%',
        '6/12': '50%',
        '7/12': '58.333%',
        '8/12': '66.667%',
        '9/12': '75%',
        '10/12': '83.333%',
        '11/12': '91.667%',

        // tablet
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',

        // mobile
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',

        full: '100%',
      },
    },
    screens: {
      // Mobile devices
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      // Tablet
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      // Laptop
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      // Laptop Large
      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      // 4K device
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

