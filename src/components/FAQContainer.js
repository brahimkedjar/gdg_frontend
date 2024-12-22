import React, { useState } from "react";
import styled from "styled-components";
import arrowFAQ from "../assets/images/arrow_FaQ.svg";

const FAQContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 20px;
  background: #181717;
  color: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (max-width: 450px) {
    background: #121212;
    padding: 60px 0;
  }
`;

const FAQtext = styled.h2`
  font-size: 4rem;
  color: #efece6;
  margin-bottom: 0.5rem;

  span {
    background: linear-gradient(180deg, #08f6f6, #017373);
    -webkit-background-clip: text; /* Clip the background to the text */
    -webkit-text-fill-color: transparent; /* Make the text transparent to show the gradient */
    display: inline-block; /* Ensure the gradient applies properly */
  }
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media (max-width: 450px) {
    font-size: 2.3rem;
  }
`;

const FAQdesc = styled.p`
  font-size: 1rem;
  color: #bababa;
  margin-bottom: 5rem;
  width: 80%;
  @media (max-width: 450px) {
    width: 90%;
    font-size: 0.8rem;
  }
`;
const AccordionItem = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 15px 0;
`;

const QuestionContainer = styled.div`
  border: 1px #08f6f6 solid;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ isOpen }) => (isOpen ? "#efece6" : "#181717")};
  color: ${({ isOpen }) => (isOpen ? "black" : "white")};
  transition:
    background 0.3s,
    color 0.3s;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Question = styled.div`
  padding: 20px 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    font-size: 1.2rem;
    text-align: left;
  }
`;
const ArrowContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 1px #08f6f6 solid;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 450px) {
    width: 35px;
    height: 35px;
  }
`;

const Arrow = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(45deg);
  `}
  @media (max-width: 450px) {
    width: 35px;
    height: 35px;
  }
`;

const Answer = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  text-align: left;
  transition:
    max-height 0.5s ease-in-out,
    padding 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "10px 30px" : "0 30px")};
  font-size: 1.1rem;
  font-weight: 400;
  color: black;
  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

export const FAQContact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: "What is the theme of the Hackathon?",
      answer:
        "The Dev Call Hackathon is a dynamic event designed to bring together tech enthusiasts and healthcare professionals for a day of innovation. Participants will tackle real-world problems using AI solutions in the healthcare domain, fostering collaboration between different fields to enhance the future of medical technology.",
    },
    {
      question: "How can I participate?",
      answer:
        "Register on the registration form above and follow the instructions.",
    },
    {
      question: "Do I need a team?",
      answer: "You can participate solo or with a team of up to 4 members.",
    },
  ];

  return (
    <FAQContainer id="faq">
      <FAQtext>
        FA<span>Q</span>
      </FAQtext>
      <FAQdesc>
        We've gethered a list of the most frequently asked questions about Dev
        Call Hackathon to help you get the information you need. If you have any
        other questions, feel free to reach out to our support team.
      </FAQdesc>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <QuestionContainer isOpen={openIndex === index}>
            <Question onClick={() => toggle(index)}>
              {faq.question}
              <ArrowContainer>
                <Arrow
                  src={arrowFAQ}
                  alt="arrow"
                  isOpen={openIndex === index}
                />
              </ArrowContainer>
            </Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </QuestionContainer>
        </AccordionItem>
      ))}
    </FAQContainer>
  );
};
