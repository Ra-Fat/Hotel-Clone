import React, { useState, useEffect } from "react";
import "./Instagram.css";
import boat from "../../assets/JackPicture/boat.jpg";
import pic1 from "../../assets/JackPicture/img_1.jpg.webp";
import pic2 from "../../assets/JackPicture/img_2.jpg.webp";
import pic3 from "../../assets/JackPicture/img_3.jpg.webp";
import pic4 from "../../assets/JackPicture/img_4.jpg.webp";
import china from "../../assets/JackPicture/china.jpg";
import city from "../../assets/JackPicture/city.jpg";
import sea from "../../assets/JackPicture/sea1.jpg";
import sky from "../../assets/JackPicture/skying.webp";

function InstagramPart() {
  const initialPictures = [pic1, pic2, pic3, pic4, china, city, sea, sky, boat];
  const [pictures, setPictures] = useState(initialPictures);

  useEffect(() => {
    const interval = setInterval(() => {
      setPictures((prev) => {
        const updated = [...prev.slice(1), prev[0]];
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div  className="instagramContainer">
      <div className="textInstaComponent">
        <div className="subTextInsta">
          <h3 data-aos="fade-up" data-aos-duration="1300" className="titleInstagram">INSTAGRAM</h3>
          <p data-aos="fade-up" data-aos-duration="1300" className="instatext">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
      </div>
      <div className="instaPicContainer">
        <div className="slider">
          <div data-aos="fade-up" data-aos-duration="1300" className="picBlock">
            {pictures.map((img, i) => (
              <div className="picWrapper" key={i}>
                <img className="pic" src={img} alt="Instagram" />
                <i className="fa-brands fa-instagram"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramPart;
