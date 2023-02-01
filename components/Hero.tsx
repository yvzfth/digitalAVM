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
    <div
      className='w-full h-[40rem] md:h-[44rem] overflow-hidden p-[4rem] 
    bg-hero-pattern bg-fixed
    '
    >
      <div className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>
        Aradığınız Ürün Gün İçinde Kapınızda
      </div>
      <div className='flex justify-evenly items-center mt-10'>
        <div className='lg:-ml-28  '>
          <img src='ill-2-min.png' alt='' width={400} height={300} />
        </div>
        <div className='lg:-ml-10 hidden lg:block '>
          <img src='ill-4-min.png' alt='' width={250} height={300} />
        </div>
        <div className='hidden md:block '>
          <img src='ill-3-min.png' alt='' width={250} height={250} />
        </div>
      </div>
      <div className='mt-10 text-center'>
        <ThemeProvider theme={theme}>
          <Button
            color='neutral'
            variant='contained'
            sx={{ height: '3rem' }}
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
