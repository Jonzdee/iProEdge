import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne} // Replace with the image of the new iPhone accessory
            productName="MagSafe Wireless Charger"
            price="44.00"
            color="Black"
            badge={true} // Indicates it's a new arrival
            des="Charge your iPhone faster with this sleek MagSafe-compatible wireless charger. Compact and designed for convenience."
          />

        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo} // Replace with an image of a smart accessory
            productName="Apple Watch Band"
            price="250.00"
            color="Black"
            badge={true}
            des="Stylish and durable band for Apple Watch, perfect for everyday use and workouts."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree} // Replace with an image of another iPhone accessory
            productName="iPhone Charging Dock"
            price="80.00"
            color="Mixed"
            badge={true}
            des="Keep your iPhone charged and on display with this sleek and modern charging dock."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour} // Replace with an image of iPhone accessories
            productName="AirPods Pro Case"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Protect your AirPods with this durable and stylish case, available in multiple colors."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo} // Replace with a different product image
            productName="Lightning to USB-C Cable"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Fast and reliable Lightning to USB-C cable, perfect for charging and data transfer."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
