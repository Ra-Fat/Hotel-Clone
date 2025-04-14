import React from "react";
import "./AboutCompo.css";
import pic1 from "../../assets/JackPicture/img_1.jpg.webp";

export default function WhyUsComponent() {

    return (
            <section className="AboutHotelCompoContainer">
                <div className="subAboutHotelCompoContainer">
                    <div data-aos="fade-right" data-aos-duration="1300" className="leftCompoAbout" >
                        <div className="emptpyBackground"></div>
                        <img className="picSea" src={pic1} alt="image" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1300" className="rightCompoAbout" >
                        <h2 >Why Us</h2>
                        <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p >
                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </section>
        );
}