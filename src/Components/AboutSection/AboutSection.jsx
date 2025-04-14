import React from 'react';
import './AboutSection.css';
import aboutImage from '../../assets/img_1.jpg';

const SectionComponent = () => {
    return (
        <section className="about-section">
            <div className="content-wrapper">
                <div className="green-shape"></div>
                
                <div className="image-text-wrapper">

                    <div className="image-wrapper">
                        <img
                            src={aboutImage}
                            alt="About Hotel"
                            className="about-image"
                        />
                    </div>
                    <div className="text-wrapper">
                        <h2>ABOUT HOTEL</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                            right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p>
                            A small river named Duden flows by their place and supplies it with the
                            necessary regelialia. It is a paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionComponent;
