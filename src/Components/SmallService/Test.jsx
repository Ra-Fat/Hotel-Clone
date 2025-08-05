import React, { useRef } from 'react';
import pic1 from '../../assets/JackPicture/pic1.png';
import pic2 from '../../assets/JackPicture/pic2.png';
import pic3 from '../../assets/JackPicture/pic3.png';
import pic4 from '../../assets/JackPicture/pic4.png';
import pic5 from '../../assets/JackPicture/pic5.png';
import pic6 from '../../assets/JackPicture/pic6.png';
import './test.css';

export default function ServiceSmallPart() {
    const containerRef = useRef(null);
    const scrollAmount = 350;

    const handleScroll = (direction) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const data = [
        { pic: pic1, title: "Trekking", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE" },
        { pic: pic2, title: "The Map", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE" },
        { pic: pic3, title: "Suitcase", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE" },
        { pic: pic4, title: "Island Hoping", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE" },
        { pic: pic5, title: "World Round", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE" },
        { pic: pic6, title: "World Round", text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE" }
    ];

    return (
        <div className='ContainerSerivePart'>
            <div className="subContainerServicePart">
                <span className='serviceTitle'>OUR SERVICES</span>
                <div data-aos="fade-right" data-aos-duration="1300" className="ContainerCardService" ref={containerRef}>
                    {data.map((card, index) => (
                        <div key={index} className='CardService'>
                            <img className='picService' src={card.pic} alt={card.title} />
                            <p className='titleService'>{card.title}</p>
                            <p className='textService'>{card.text}</p>
                            <a className="learnMoreService" href="#">{card.learn}</a>
                        </div>
                    ))}
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1300" className="btnController">
                <button  className="prevBtn" onClick={() => handleScroll('prev')}>Prev</button>
                <button className="nextBtn" onClick={() => handleScroll('next')}>Next</button>
            </div>
        </div>
    );
}
