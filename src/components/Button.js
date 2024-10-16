// src/components/Button.js
import React from "react";
import styled from "styled-components";

const Button = ({ onClick, text }) => {
  return (
    <StyledWrapper>
      <a className="swipe" onClick={onClick}>
        {text}
        <span className="container">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .swipe {
    position: relative;
    background-color: #f1f7f7;
    width: 200px;
    height: 60px;
    color: #ffcc01;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    letter-spacing: 2px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.35);
    border-left: 0.5px solid rgba(0, 0, 0, 0.35);
    padding-left: 40px;
    cursor: pointer;
    transition: 0.35s ease;
  }

  .swipe:hover {
    padding-left: 0;
    padding-right: 40px;
    color: #324b4c;
  }

  .container {
    position: absolute;
    left: 5px;
    width: 50px;
    height: 50px;
    background: #7ab5b7;
    border-radius: 50%;
    transition: 0.35s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f1f4f7;
  }

  .swipe:hover .container {
    left: calc(100% - 55px);
    color: #324b4c;
  }
`;

export default Button;
