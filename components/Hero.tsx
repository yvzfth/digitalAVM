import { Button, createTheme, ThemeProvider } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import React from 'react';
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// const theme = createTheme({

//   palette: {
//     primary: {
//       main: 'rgb(13,25,152)',
//     },

// });
const theme = createTheme({
  palette: {
    neutral: {
      main: 'rgb(13,25,152)',
      contrastText: '#fff',
    },
  },
});
// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
const Hero = () => {
  return (
    // <div
    //   className='relative w-full h-[40rem] overflow-hidden p-[4rem] after:content-[""] after:absolute
    // after:w-full after:h-[100%] after:bg-red-200
    // after:rotate-[60deg] after:-z-10 after:top-0 after:left-0'
    // >
    // bg-[-webkit-linear-gradient(65deg, #A683E3 50%, #E4E9FD 50%)]
    <div
      className='relative w-full h-[40rem] overflow-hidden p-[4rem] 
    bg-hero-pattern
    '
    >
      <div className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>
        Aradığınız Ürün Gün İçinde Kapınızda
      </div>
      <div className='absolute hidden md:block top-40 left-20 '>
        <img src='ill-2-min.png' alt='' width={400} height={400} />
      </div>
      <div className='absolute top-44 md:top-32 md:right-20 md:translate-x-0 md:transform-none right-1/2 transform translate-x-1/2 mt-20 md:mt-0'>
        <img src='ill-3-min.png' alt='' width={400} height={400} />
      </div>
      <div className='absolute hidden lg:block top-32 left-1/2 transform -translate-x-1/2 '>
        <img src='ill-4-min.png' alt='' width={250} height={300} />
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-10'>
        <ThemeProvider theme={theme}>
          <Button
            color='neutral'
            variant='contained'
            className='group transition-all duration-300 ease-in'
          >
            Alışverişe Başla{'  '}
            <span className='group-hover:translate-x-2 '>
              <ArrowForwardIosRoundedIcon />
            </span>
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Hero;
