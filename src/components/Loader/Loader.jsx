"use client";

import Letters from "./Letters";
import { Container, LoaderContainer } from "./Loader.styled";
export const Loader = () => {
  return (
    <Container>
      <LoaderContainer />
      <Letters />
    </Container>
  );
};
