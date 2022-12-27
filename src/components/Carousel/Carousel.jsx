import Carousel from "react-bootstrap/Carousel";
import audiorio from "./../../img/auditorio.jpg";
import cabina1 from "./../../img/cabina1.jpg";
import cabina2 from "./../../img/cabina2.jpg";
import cabina4 from "./../../img/cabina4.jpg";
import bateria from "./../../img/bateria.jpg";

function UncontrolledExample() {
  return (
    <Carousel className="w-50">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cabina2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cabina4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bateria}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={audiorio}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cabina1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
