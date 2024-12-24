import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

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
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0;
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
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;

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
  box-sizing: border-box;

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

// Modern Popup Styles
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContainer = styled.div`
  background: #1e1e1e;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.3s ease-in-out;

  h2 {
    color: #08f6f6;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
    font-size: 1rem;
    color: #d3d3d3;
  }

  button {
    background: #08f6f6;
    color: #121212;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #017373;
    }
  }
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isPopupVisible, setPopupVisible] = useState(false);

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
        setPopupVisible(true); // Show the popup
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Error: Unable to send message.");
    }
  };

  return (
    <PageContainer id="contact">
      <ContentWrapper>
        <FormContainer>
          <FormTitle>
            Contact <span>us</span>
          </FormTitle>
          <Form onSubmit={handleSubmit}>
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

      {isPopupVisible && (
        <PopupOverlay>
          <PopupContainer>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. We will get back to you soon.</p>
            <button onClick={() => setPopupVisible(false)}>Close</button>
          </PopupContainer>
        </PopupOverlay>
      )}
    </PageContainer>
  );
};
