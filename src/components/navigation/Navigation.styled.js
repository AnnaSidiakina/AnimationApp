"use client";

import { styled } from "styled-components";

export const StyledNavMenu = styled.ul`
  display: flex;
  padding: 20px 0;
`;

export const StyledNavItem = styled.li`
  margin-right: 50px;
  background-color: #e3f6ff;
  padding: 5px 20px;
  border-radius: 10px;
  box-shadow: none;
  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: 0px 10px 13px -7px #000000;
  }
`;
