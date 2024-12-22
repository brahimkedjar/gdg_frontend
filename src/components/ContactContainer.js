import React from "react";
import styled from "styled-components";
import contactPic from "../assets/images/gdg_balloons.svg";
import { useState } from "react";

const PageContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background: #121212;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  @media (max-width: 350px) {
    max-height: 60vh;
    padding: 0;
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center the form */
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0; /* Remove the gap between elements */
  }
`;

const GDGIcon = styled.div`
  display: none; /* Hide the image on all small screens */

  @media (min-width: 769px) {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const IconImage = styled.div`
  width: 80%;
  height: 450px;
  background: url(${contactPic}) no-repeat center;
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

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 350px) {
    width: 0;
    height: 0;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  background: #1e1e1e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: #fff;

  @media (max-width: 768px) {
    width: 80%;
    padding: 10%;
  }
`;

const FormTitle = styled.h2`
  text-align: left;
  font-size: 2rem;
  color: #efece6;
  margin-bottom: 2rem;

  span {
    background: linear-gradient(180deg, #08f6f6, #017373);
    -webkit-background-clip: text; /* Clip the background to the text */
    -webkit-text-fill-color: transparent; /* Make the text transparent to show the gradient */
    display: inline-block; /* Ensure the gradient applies properly */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NameFields = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box; /* Ensures padding doesn't cause overflow */

  &:focus {
    outline: 2px solid #08f6f6;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  resize: none;
  height: 100px;
  box-sizing: border-box; /* Ensures padding doesn't cause overflow */

  &:focus {
    outline: 2px solid #08f6f6;
  }
`;

const SubmitButton = styled.button`
  background: #08f6f6;
  color: #121212;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #017373;
  }
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://gdg-backend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Error: Unable to send message.");
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <FormContainer>
          <FormTitle>
            Contact <span>us</span>
          </FormTitle>
          <Form onSubmit={handleSubmit}>
            <NameFields>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </NameFields>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Send</SubmitButton>
          </Form>
        </FormContainer>
      </ContentWrapper>
    </PageContainer>
  );
};