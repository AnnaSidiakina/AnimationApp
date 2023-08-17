"use client";

import { styled } from "styled-components";
import Image from "next/image";

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

export const StyledMoviesItem = styled.li`
  border-radius: 10px;
  box-shadow: 0px 2px 15px 7px rgba(0, 0, 0, 0.07);
  padding: 8px;
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
`;

export const StyledMovieTitle = styled.p`
  padding: 10px 0;
`;
