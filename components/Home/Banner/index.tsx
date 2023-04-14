import products from '@/utils/products';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default function App() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      animation='cubeAnimation'
    >
      {products.map((item, index) => {
        return <div key={index} data-src={item.img} />;
      })}
    </AutoplaySlider>
  );
}
