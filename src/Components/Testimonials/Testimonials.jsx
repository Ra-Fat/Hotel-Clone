import React, { useState, useRef, useEffect } from 'react';

import person1 from '../../assets/JackPicture/men4.webp';
import person2 from '../../assets/JackPicture/men5.webp';
import person3 from '../../assets/JackPicture/women1.webp';
import person4 from '../../assets/JackPicture/women2.webp';
import person5 from '../../assets/JackPicture/men1.jpg';
import './Testimonials.css';

function TestiMo() {
    const dataTestimonials = [
        {
            text: "A calm creek named Riven glides past their town and grants it with the needed provision. It is a mythical realm, where crispy chunks of words soar into your voice.",
            pic: person1,
            personName: "John Doe",
            personJob: "Creative Director",
        },
        {
            text: "A tiny brook named Luren runs near their home and grants it with the needed sustenance. It is a dreamlike land, where toasted bits of phrases drift into your lips.",
            pic: person5,
            personName: "Fenwick",
            personJob: "Architect",
        },
        {
            text: "A calm creek named Riven glides past their town and grants it with the needed provision. It is a mythical realm, where crispy chunks of words soar into your voice.",
            pic: person4,
            personName: "Selene Marlowe",
            personJob: "Fashion Designer",
        },
        {
            text: "A small stream named Joren winds near their site and blesses it with the needed elements. It is a utopian place, where golden scraps of phrases slip into your mouth.",
            pic: person3,
            personName: "Rosalind Everly",
            personJob: "Art Curator",
        },
        {
            text: "A clear spring named Furen runs past their space and fuels it with the needed essentials. It is a blissful world, where charred bits of syntax land upon your lips.",
            pic: person2,
            personName: "Evander Croix",
            personJob: "Film Director",
        },
        {
            text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
            pic: person1,
            personName: "Evander Croix",
            personJob: "Film Director",
        },
    ];

    const containerRef = useRef(null);
    const scrollAmount = 450;

    const handleScroll = (direction) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            handleScroll('next');
        }, 3000);

        return () => clearInterval(autoSlide);
    }, []);

    return (
        <div className='TestimoContainer'>
            <div className="SubContainerTestimo">
                <div data-aos="fade-up" data-aos-duration="1300" className="textContainer">
                    <p className="testimoTitle">TESTIMONIALS</p>
                    <p className="smallTextTestimo">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className="testimoCardContainer">
                    <div data-aos="fade-up" data-aos-duration="1300" className="subCardTestimoContainer"ref={containerRef}>
                        {dataTestimonials.map((testimo, index) => (
                            <div key={index} className='testimoCard'>
                                <div className="btnQuoat">
                                    <i className="fa-solid fa-quote-left"></i>
                                </div>
                                <div className="textContainerTestimo">
                                    <p className="textCardTestimo">{testimo.text}</p>
                                </div>
                                <div className="profileTestimoContainer">
                                    <div className="pictureContainereTestimo">
                                        <img className='picTestimo' src={testimo.pic} alt={testimo.personName} />
                                    </div>
                                    <div className="contactContainerTestimo">
                                        <p className="PersonNameTestimo">{testimo.personName} <br /> <span className="PersonJobTestimo">{testimo.personJob}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1300" className="btnControllerTestimo">
                        <button onClick={() => handleScroll('prev')} className="nextCardTestimo"> Prev </button>
                        <button onClick={() => handleScroll('next')} className="prevCardTestimo"> Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestiMo;
