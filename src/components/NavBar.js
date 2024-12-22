import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import GDGLogo from "../assets/images/GDG setif Dark Horizontal-Logo.svg";

// Main navbar container
const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #121212;
  color: #333;
  padding: 20px;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;

  &.scrolled {
    color: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  }
`;

// Wrapper for navbar content
const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

// Logo style
const Logo = styled.img`
  width: 14rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 10rem;
  }
  @media (max-width: 350px) {
    width: 8rem;
  }
`;

// Links container
const Links = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    position: absolute;
    top: 60px;
    left: 0;
    background: #121212;
    width: 100%;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    animation: ${(props) =>
      props.showMenu
        ? "slideDown 0.3s ease-in-out"
        : "none"}; /* Removed slideUp animation */

    /* Fade-out effect */
    opacity: ${(props) => (props.showMenu ? "1" : "0")};
    transform: ${(props) =>
      props.showMenu ? "translateY(0)" : "translateY(-20px)"};
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Styled Link component
const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #08f6f6;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #08f6f6;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Button component
const Button = styled.button`
  background-color: #08f6f6;
  color: black;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;
  height: 30px;
  line-height: 30px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #15cde1;
  }
`;

// Hamburger Icon and menu toggle
const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }

  div {
    width: 30px;
    height: 4px;
    background: white;
    border-radius: 5px;
    transition:
      transform 0.3s ease-in-out,
      width 0.3s ease-in-out;

    &:nth-child(1),
    &:nth-child(3) {
      width: ${(props) => (props.open ? "40px" : "30px")};
    }

    &:nth-child(1) {
      transform: ${(props) =>
        props.open ? "rotate(45deg) translateY(12px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.open ? "rotate(-45deg) translateY(-12px)" : "none"};
    }
  }
`;

// Navbar component
export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavBarContainer>
      <NavContent>
        <Logo src={GDGLogo} alt="GDG Setif Logo" />
        <HamburgerIcon open={showMenu} onClick={() => setShowMenu(!showMenu)}>
          <div />
          <div />
          <div />
        </HamburgerIcon>
        <Links showMenu={showMenu}>
          <StyledLink to="hero" smooth={true} duration={500}>
            Count
          </StyledLink>
          <StyledLink to="registration" smooth={true} duration={500}>
            About
          </StyledLink>
          <StyledLink to="schedule" smooth={true} duration={500}>
            TimeLine
          </StyledLink>
          <StyledLink to="sponsors" smooth={true} duration={500}>
            Sponsors
          </StyledLink>
          <Button>Apply</Button>
        </Links>
      </NavContent>
    </NavBarContainer>
  );
};
