import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.section`
  padding: 50px 20px;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  &:hover {
    background: #0056b3;
  }
`;

export const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <FormContainer id="registration">
      <h2>Register for the Hackathon</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    </FormContainer>
  );
};
