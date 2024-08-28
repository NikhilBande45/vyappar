import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "1. How do you track the performance of ad campaigns?",
    answer: "We use advanced analytics tools to monitor key performance indicators (KPIs) like click-through rates, conversion rates, and return on investment (ROI). Regular reports ensure transparency and keep you informed of the campaign's success.",
  },
  {
    question: "2. What advertising platforms do you specialize in?",
    answer: "We manage campaigns across multiple platforms including Google Ads, Facebook, Instagram, LinkedIn, and more, ensuring your ads reach the right audience on the right platform.",
  },
  {
    question: "3. How do you optimize ad campaigns?",
    answer: "Our team continuously monitors and adjusts campaigns based on real-time data, A/B testing, and audience insights to maximize effectiveness and ROI.",
  },
  {
    question: "4. What is your approach to targeting the right audience?",
    answer: "We use a combination of demographic data, behavioral insights, and geographic targeting to ensure your ads are seen by those most likely to engage with your brand.",
  },
  {
    question: "5. How do you handle ad budget management?",
    answer: "We strategically allocate your budget to achieve the best results, continuously optimizing for performance while avoiding overspending.",
  },
];

const FAQItem = ({ question, answer, index, toggleFAQ, isActive }) => {
  return (
    <div className="faq-item">
      <div
        className={`question ${isActive ? "clicked" : ""}`}
        onClick={() => toggleFAQ(index)}
      >
        {question}
        <img 
          src={isActive ? '/images/FAQ_up.png' : '/images/FAQ_down.png'} 
          alt="arrow" 
          className="arrow" 
        />
      </div>
      {isActive && <div className="answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
        <div className="faq-top-content">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtext">Discover how we maximize your ad campaigns for optimal results.</p>
        </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
