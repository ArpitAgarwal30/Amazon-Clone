import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iPhone 11 Pro (64GB) - Space Grey"
            price={1324.26}
            image="https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="23451267"
            title="
          Callas Metal Mesh Desk Organizer, Black LD 708-05"
            price={6.79}
            image="https://images-na.ssl-images-amazon.com/images/I/81f5kIpOFkL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="34561267"
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs, 2.27 kg (Double Rich Chocolate), Primary Source Isolate"
            price={73.58}
            image="https://images-na.ssl-images-amazon.com/images/I/712KrWHJUSL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="45671267"
            title="ASUS ZenBook Duo Intel Core i7-10510U 10th Gen 14-inch FHD Thin and Light Laptop."
            price={1626.13}
            image="https://images-na.ssl-images-amazon.com/images/I/71hI3GBPvVL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="56781267"
            title="Meneghini La Cambusa Fridge Is Practically A Kitchen"
            price={41000}
            image="https://netdna.coolthings.com/wp-content/uploads/2012/11/lacambusa1.jpg"
            rating={5}
          />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home__row">
          <Product
            id="67891234"
            title="LG 49WL95C-W 49 Curved UltraWide HDR IPS Monitor"
            price={1469.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71EP7F-yPKL._AC_SL1500_.jpg"
            rating={4}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
