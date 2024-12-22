import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hackathonImage from "../assets/images/Background.png";
import arrowIcon from "../assets/images/arrow icon.svg";
import arrowIcon1 from "../assets/images/arrow icon1.svg";

// Page Container for the entire section
const PageContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background: #121212;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  @media (max-width: 1024px) {
    .hero-section {
      padding: 80px 40px;
    }
  }
`;

const ContentWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box; /* Ensures padding is considered in the width */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack the elements vertically on smaller screens */
    text-align: center; /* Center text when stacked */
  }
`;

const GDGIcon = styled.div`
  width: 50%; /* Take up half of the container */
  display: flex;
  justify-content: center; /* Center the icon within its half */
  align-items: center;
  @media (max-width: 768px) {
    width: 70%; /* Make the icon smaller on mobile */
    height: 15rem;
    margin-bottom: 0;
  }
  @media (max-width: 350px) {
    width: 70%; /* Make the icon smaller on mobile */
    height: 10rem;
    margin-bottom: 0;
  }
`;

const IconImage = styled.div`
  width: 450px;
  height: 450px;
  background: url(${hackathonImage}) no-repeat center;
  background-size: contain;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
  color: white;
  margin-top: 0;
  margin-bottom: -10px;

  span {
    display: block;
    color: #08f6f6;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 350px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #bababa;
  margin-bottom: 20px;
  span {
    color: #08f6f6;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 350px) {
    font-size: 0.7rem;
  }
`;

const Subtitle2 = styled.h5`
  font-size: 1.3rem;
  color: #fff;
  margin: 0;
  margin-bottom: 40px;
  direction: rtl; /* Ensure RTL for this subtitle */

  span {
    color: #08f6f6;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 350px) {
    font-size: 0.7rem;
  }
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: right;
  gap: 0;
  direction: rtl;
  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    text-align: right; /* Center text when stacked */
    margin-top: 20px; /* Add some space between sections */
  }
`;

const ButtonWithIcon = styled(Link)`
  padding: 20px 15px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #08f6f6;
  text-decoration: none;
  letter-spacing: 2px;
  border-radius: 50px; /* Half pill shape */
  border: 3px solid #08f6f6;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 10px;
  }

  &:hover {
    background: #08f6f6;
    color: black;
    transform: scale(1.05);
    img {
      content: url(${arrowIcon1});
    }
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

const ArrowIcon = styled.img`
  width: 10px;
  height: 10px;
  transition: all 0.3s ease;
`;

export const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <PageContainer>
      <ContentWrapper>
        <GDGIcon>
          <IconImage />
        </GDGIcon>
        <TextContainer>
          <Title>
            <span>DEV CALL </span>HACKATHON
          </Title>
          <Subtitle>Code the Cure: Innovating Healthcare with AI</Subtitle>
          <Subtitle2>
            Dec <span>30-31</span> ,2024
          </Subtitle2>
          <ButtonWithIcon
            to="/register"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ArrowIcon
              src={hovered ? arrowIcon1 : arrowIcon}
              alt="arrow icon"
            />
            ! APPLY NOW
          </ButtonWithIcon>
        </TextContainer>
      </ContentWrapper>
    </PageContainer>
  );
};
