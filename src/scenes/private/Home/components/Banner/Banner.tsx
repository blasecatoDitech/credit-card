import { Carousel } from "antd";
import slide1 from "../../../../../assets/images/slide1.png";
import slide2 from "../../../../../assets/images/slide2.png";
import slide3 from "../../../../../assets/images/slide 3.png";
import b1 from "../../../../../assets/images/b1.png";
import b2 from "../../../../../assets/images/b2.png";
import t1 from "../../../../../assets/images/t1.png";

const Banner = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className="Banner">
      <div className="container">
        <div className="caroucel">
          <Carousel afterChange={onChange}>
            <div>
              <img src={slide2} className="slide" alt="slide" />
            </div>
            <div>
              <img src={slide1} className="slide" alt="slide" />
            </div>
            <div>
              <img src={slide3} className="slide" alt="slide" />
            </div>
          </Carousel>
        </div>
        <div className="column">
          <div className="row">
            <img src={t1} className="slide" alt="slide" />
          </div>
          <div className="row">
            <div className="col">
              <img src={b1} className="slide" alt="slide" />
            </div>
            <div className="col">
              <img src={b2} className="slide" alt="slide" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
