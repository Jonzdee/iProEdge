import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      <Product
  _id="1011"
  img={bestSellerOne} // Replace with image for an iPhone case
  productName="Premium iPhone Case"
  price="35.00"
  color="Black and White"
  badge={true} // Badge for bestseller or featured product
  des="Protect your iPhone with this stylish and durable case, designed for comfort and longevity."
/>

<Product
  _id="1012"
  img={bestSellerTwo} // Replace with image for wireless charger
  productName="Wireless Charger"
  price="50.00"
  color="Gray"
  badge={false}
  des="Charge your iPhone effortlessly with our fast and sleek wireless charger, perfect for home or office."
/>

<Product
  _id="1013"
  img={bestSellerThree} // Replace with image for screen protector
  productName="Tempered Glass Screen Protector"
  price="25.00"
  color="Clear"
  badge={true}
  des="Keep your iPhone screen scratch-free and crystal clear with this ultra-durable tempered glass screen protector."
/>

<Product
  _id="1014"
  img={bestSellerFour} // Replace with image for power bank
  productName="Portable Power Bank"
  price="60.00"
  color="Black"
  badge={false}
  des="Stay powered up on the go with our compact and powerful 10,000mAh portable power bank, perfect for iPhones."
/>

      </div>
    </div>
  );
};

export default BestSellers;
