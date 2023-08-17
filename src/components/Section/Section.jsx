import { SectionStyled } from "./Section.styled";
export const Section = ({ children }) => {
  return (
    <div>
      <SectionStyled>{children}</SectionStyled>
    </div>
  );
};
