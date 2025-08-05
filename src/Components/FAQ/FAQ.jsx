import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Is it free?',
    answer: `Far far away, behind the word mountains, far from the countries Vokalia 
      and Consonantia, there live the blind texts. Separated they live in 
      Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the 
      necessary regelialia.`,
  },
  {
    question: 'How to install this template?',
    answer: `Far far away, behind the word mountains, far from the countries Vokalia 
      and Consonantia, there live the blind texts. Separated they live in 
      Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the 
      necessary regelialia.`,
  },
  {
    question: 'Where can I get help?',
    answer: `Far far away, behind the word mountains, far from the countries Vokalia 
      and Consonantia, there live the blind texts. Separated they live in 
      Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
      A small river named Duden flows by their place and supplies it with the 
      necessary regelialia.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container questionContainer">
      <div data-aos="fade-up" data-aos-duration="1300" className="faq-left">
        <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
      </div>

      <div data-aos="fade-up" data-aos-duration="1300" className="faq-right">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span className={`faq-arrow ${openIndex === index ? 'open' : ''}`}>
              <i className="fa-solid fa-angle-down"></i>
              </span>
            </button>

            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

