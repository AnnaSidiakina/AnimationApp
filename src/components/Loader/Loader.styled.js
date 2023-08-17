"use client";

import { styled, keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  0% {
  transform: rotate(1deg) scale(1);
}
  40% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const rotateOpposite = keyframes`
0% {
  transform: rotate(1deg) scale(1);
}

  40% {
    transform: rotate(-180deg) scale(0.8);
  }
  100% {
    transform: rotate(-360deg) scale(1);
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  height: 300px;
  width: 300px;
  margin: 0 auto;

  &::before {
    content: " ";
    display: block;
    position: absolute;
    height: 300px;
    width: 300px;
    background-image: url(/images/blueEllipse.svg);
    background-repeat: no-repeat;
    background-position: center;

    animation: ${rotate} 4s linear infinite;
  }
  &::after {
    content: " ";
    display: block;
    position: absolute;
    height: 300px;
    width: 300px;
    background-image: url(/images/greenEllipse.svg);
    background-repeat: no-repeat;
    background-position: center;
    animation: ${rotateOpposite} 4s linear infinite;
  }
`;
