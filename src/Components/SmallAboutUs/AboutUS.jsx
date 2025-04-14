import React, { useRef } from 'react';
import pic1 from '../../assets/JackPicture/men4.webp';
import pic2 from '../../assets/JackPicture/women1.webp';
import pic3 from '../../assets/JackPicture/women2.webp';
import pic4 from '../../assets/JackPicture/men5.webp';
import pic5 from '../../assets/JackPicture/men1.jpg';
import pic6 from '../../assets/JackPicture/men2.jpg';
import './AboutUS.css';
function AboutSmall() {
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
        const data = [
            { pic: pic1,  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE", name: "James Scott" , title: "CEO, Co-Founder" },
            { pic: pic2,  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE", name: "Hannah White" , title: "CEO, Co-Founder"  },
            { pic: pic3,  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE", name: "Amy Perez" , title: "CEO, Co-Founder" },
            { pic: pic4,  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE", name: "Brian Nance" , title: "CEO, Co-Founder"  },
            { pic: pic5,  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE", name: "Stephanie Kenney" , title: "CEO, Co-Founder"  },
            { pic: pic6,  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", learn: "LEARN MORE" , name: "Amy Perez" , title: "CEO, Co-Founder" }
        ];
    
        return (
            <div className='AboutUSContainer' ref={containerRef}>
                <div className="SubContainerAboutUS">
                    <div data-aos="fade-up" data-aos-duration="1300" className="AboutUSTextContainer">
                        <p className="AboutUsBoldText">
                            Who We Are
                        </p>
                        <p className="AboutUsSmallText">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                    </div>

                    <div className="containerAboutUsBox">
                        <div data-aos="fade-left" data-aos-duration="1300" className="subContainerAboutUsBox" ref={containerRef}>
                            {data.map((box, index)=>(
                                <div  key={index} className='AboutUsBoxContainer'>
                                    <div className="AboutUsBoxSubContainer">
                                        <img className='modelPic' src={box.pic} alt={box.name} />
                                        <p className="modelName">{box.name}</p>
                                        <p className="titleModel">{box.title}</p>
                                        <p className="textModel">{box.text}</p>
                                        <a href="#" className="learnMoreModel">{box.learn}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div data-aos="fade-up" data-aos-duration="1300" className="btnControllerAboutUs">
                    <button className="prevBtn" onClick={() => handleScroll('prev')}>Prev</button>
                    <button className="nextBtn" onClick={() => handleScroll('next')}>Next</button>
                </div>
            </div>
        );
}

export default AboutSmall
