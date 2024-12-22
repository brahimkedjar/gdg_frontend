import React from "react";
import styled from "styled-components";
import timerBg from "../assets/images/timer_bg_black.png";

const SponsorsContainer = styled.section`
  padding: 60px 20px;
  background: #121212;
  background-image: url(${timerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  min-height: 80vh;
  text-align: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  @media (max-width: 450px) {
    background-image: none;
    box-shadow: none;
  }
`;

const Sponsortext = styled.h2`
  font-size: 4rem;
  color: #efece6;
  margin-bottom: 2rem;

  span {
    background: linear-gradient(180deg, #08f6f6, #017373);
    -webkit-background-clip: text; /* Clip the background to the text */
    -webkit-text-fill-color: transparent; /* Make the text transparent to show the gradient */
    display: inline-block; /* Ensure the gradient applies properly */
  }
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media (max-width: 350px) {
    font-size: 2.3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const SponsorCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin-top: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
`;

export const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp", logo: "https://via.placeholder.com/200" },
    { name: "Innovate Ltd.", logo: "https://via.placeholder.com/200" },
    { name: "Creative Minds", logo: "https://via.placeholder.com/200" },
  ];

  return (
    <SponsorsContainer id="sponsors">
      <Sponsortext>
        <span>Our</span>Sponsors
      </Sponsortext>
      <Grid>
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index}>
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
            <h3>{sponsor.name}</h3>
          </SponsorCard>
        ))}
      </Grid>
    </SponsorsContainer>
  );
};
