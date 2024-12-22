import React, { useState, useEffect } from "react";
import styled from "styled-components";
import timerBg from "../assets/images/timer_bg_black.png";

const TimerContainer = styled.div`
  background: #121212;
  background-image: url(${timerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  font-family: "Poppins", sans-serif;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    background-image: none; /* Remove background image on smaller screens */
    min-height: auto; /* Adjust the height */
    padding: 15px; /* Adjust padding */
  }
`;

const RegistrationCloseText = styled.h2`
  font-size: 2.5rem;
  color: #efece6;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Make the text smaller on phones */
    margin-bottom: 3rem;
  }
  @media (max-width: 350px) {
    font-size: 1.5rem; /* Make the text smaller on phones */
  }
`;

const CountdownTimer = styled.div`
  font-size: 2.5rem;
  background: #1f1f1f;
  box-shadow: 0px 24.7px 74px 0px #15cde152;
  margin: 30px 0;
  font-weight: bold;
  color: #ff4757;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  border: 1.23px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Make the text smaller on phones */
    padding: 20px 15px; /* Adjust padding */
  }
`;

const TimerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  margin: 0 10px;
  font-size: 4rem;
  font-weight: 400;
  color: white;
  animation: fadeIn 1s ease-in-out;
  text-align: center;

  &:not(:last-child) {
    margin-right: 20px;
  }

  span {
    font-size: 2rem; /* Smaller font for the label */
    font-weight: 400;
    color: white;
    margin-top: 10px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    font-size: 2.1rem; /* Adjust the font size on smaller screens */
    padding: 0; /* Adjust padding */
    span {
      font-size: 0.8rem; /* Smaller font for the label */
      font-weight: 400;
      color: white;
      margin-top: 15px;
    }
  }

  @media (max-width: 350px) {
    margin: 0;
    font-size: 2rem; /* Adjust the font size on smaller screens */
    padding: 0; /* Adjust padding */
    span {
      font-size: 0.7rem; /* Smaller font for the label */
      font-weight: 400;
      color: white;
      margin-top: 15px;
    }
  }
`;





export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const eventDate = new Date("2024-12-28T00:00:00Z"); // Change this to the event end date

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContainer>
      <RegistrationCloseText>Registration closes in:</RegistrationCloseText>
      <CountdownTimer>
        <TimerBox>
          {timeLeft.days}
          <span>Days</span>
        </TimerBox>
        <TimerBox>
          {timeLeft.hours}
          <span>Hours</span>
        </TimerBox>
        <TimerBox>
          {timeLeft.minutes}
          <span>Minutes</span>
        </TimerBox>
        <TimerBox>
          {timeLeft.seconds}
          <span>Seconds</span>
        </TimerBox>
      </CountdownTimer>
    </TimerContainer>
  );
};
