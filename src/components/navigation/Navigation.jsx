import Link from "next/link";
import { StyledNavMenu, StyledNavItem } from "./Navigation.styled";
import { Section } from "../Section/Section";

export const Menu = () => {
  return (
    <Section>
      <StyledNavMenu>
        <StyledNavItem>
          <Link href="/">Home</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link href="/movies">Movie</Link>
        </StyledNavItem>
      </StyledNavMenu>
    </Section>
  );
};
