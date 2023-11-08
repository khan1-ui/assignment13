import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from '../assets/slider-image/s.jpeg'
import img1 from '../assets/slider-image/s1.jpeg'
import img2 from '../assets/slider-image/s2.webp'
import img3 from '../assets/slider-image/s3.jpg'
import img4 from '../assets/slider-image/s4.jpg'

const Slider = () => {

    return (
        <div className=''>
           <Carousel infiniteLoop useKeyboardArrows autoPlay >
                
                <div>
                    <img src={img}  height="400px" />
                    <p className="legend">learn more</p>
                </div>
                <div>
                    <img src={img1}  height="400px"/>
                    <p className="legend">learn more</p>
                </div>
                <div>
                    <img src={img2}  height="400px"/>
                    <p className="legend">learn more</p>
                </div>
                <div>
                    <img src={img3} height="400px" />
                    <p className="legend">learn more</p>
                </div>
                <div>
                    <img src={img4}  height="400px"/>
                    <p className="legend">learn more</p>
                </div>
            </Carousel>
            <br /><br /><br />
        </div>
    );
};

export default Slider;