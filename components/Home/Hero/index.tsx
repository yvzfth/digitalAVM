import products from '@/utils/products';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';

export default function App() {
  return (
    // <AwesomeSlider animation='cubeAnimation'>
    //   {products.map((item, index) => {
    //     return <div key={index} data-src={item.img} />;
    //   })}
    // </AwesomeSlider>
    <div className='py-20 mx-auto w-fit'>DigitalAVM - Hero</div>
  );
}
