import React from "react";
import styled from "styled-components";
import image from "../assets/images/description_image.svg";

const SponsorsContainer = styled.section`
  padding: 40px 20px;
  background: #121212;
  height: 70vh;
  text-align: left;
`;

const Descriptiontext = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  color: #efece6;
  text-align: center;
  width: 65%;
  margin: 0 auto; /* Center the text */
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 95%;
  }
`;

const Descriptionfootertext = styled.h4`
  font-size: 1rem;
  color: #efece6;
  text-align: center;
  font-weight: 400;
  margin: 2rem auto; /* Center the text */
  span {
    color: #737373;
  }
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Icon = styled.div`
  width: 50%; /* Take up half of the container */
  display: flex;
  justify-content: flex-start; /* Center the icon within its half */
  align-items: left;
  margin-bottom: 0;
  @media (max-width: 768px) {
    width: 30%; /* Make the icon smaller on mobile */
    height: 3rem;
  }
  @media (max-width: 430px) {
    width: 22%; /* Make the icon smaller on mobile */
    height: 1rem;
  }
`;

const IconImage = styled.div`
  width: 70px;
  height: 70px;
  margin-left: 30%;
  background: url(${image}) no-repeat center;
  background-size: contain;
  @media (max-width: 768px) {
    width: 40%;
    height: 1rem;
    margin-left: 25%;
    margin-bottom: 0;
  }
`;

export const Desciption = () => {
  return (
    <SponsorsContainer id="sponsors">
      <Icon>
        <IconImage />
      </Icon>
      <Descriptiontext>
        The Dev Call Hackathon is a dynamic event designed to bring together
        tech enthusiasts and healthcare professionals for a day of
        innovation.Participants will tackle real-world problems using AI
        solutions in the healthcare domain, fostering collaboration between
        different ﬁelds to enhance the future of medical technology..
      </Descriptiontext>
      <Descriptionfootertext>
        google developers groupe <span> Setif</span>
      </Descriptionfootertext>
    </SponsorsContainer>
  );
};
