import React, { useState, useEffect, useRef } from 'react';
import './Blog.css';
import pic1 from '../../assets/JackPicture/img_1.jpg.webp';
import pic2 from '../../assets/JackPicture/img_2.jpg.webp';
import pic3 from '../../assets/JackPicture/img_3.jpg.webp';
import pic4 from '../../assets/JackPicture/img_4.jpg.webp';

function BlogPost() {
  const data = [
    {
      pic: pic1,
      title: "Trekking",
      text: "Far far away, behind the word mountains, far from the countries",
      learn: "READ MORE"
    },
    {
      pic: pic2,
      title: "The Map",
      text: "Far far away, behind the word mountains, far from the countries",
      learn: "READ MORE"
    },
    {
      pic: pic3,
      title: "Suitcase",
      text: "Far far away, behind the word mountains, far from the countries",
      learn: "READ MORE"
    },
    {
      pic: pic4,
      title: "Island Hoping",
      text: "Far far away, behind the word mountains, far from the countries",
      learn: "READ MORE"
    },
    {
      pic: pic1,
      title: "World Round",
      text: "Far far away, behind the word mountains, far from the countries",
      learn: "READ MORE"
    },
    {
      pic: pic2,
      title: "World Round",
      text: "Far far away, behind the word mountains, far from the countries",
      learn: "READ MORE"
    }
  ];

  const containerRef = useRef(null);
  const scrollAmount = 440;

  const handleScroll = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll('next');
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="BlogContainer">
      <h3 className="blog_title">BLOG POSTS</h3>
      <div className="containerCardBlog">
        <div data-aos="fade-right" data-aos-duration="1300" className="subContainerCardBlog" ref={containerRef}>
          {data.map((blog, index) => {
            return (
              <div className="blogCard" key={index}>
                <div className="picContainer">
                  <img className="picBlog" src={blog.pic} alt="" />
                </div>
                <div className="btnContainer">
                  <i className="fa-solid fa-pen"></i>
                </div>
                <div className="textBlog">{blog.text}</div>
                <a className="learnMoreBlog" href="#">{blog.learn}</a>
              </div>
            );
          })}
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1300" className="BlogbtnController">
        <button className="prevBtn" onClick={() => handleScroll('prev')}>Prev</button>
        <button className="nextBtn" onClick={() => handleScroll('next')}>Next</button>
      </div>
    </div>
  );
}

export default BlogPost;
