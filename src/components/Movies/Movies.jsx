import { Section } from "../Section/Section";
import Image from "next/image";
import {
  StyledMoviesList,
  StyledImage,
  StyledMovieTitle,
  StyledMoviesItem,
} from "./Movies.styled";

export default function Movies({ movies }) {
  console.log("movies", movies);
  return (
    <Section>
      <StyledMoviesList>
        {movies.map((movie) => (
          <StyledMoviesItem key={movie.id}>
            <StyledImage
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={500}
            />
            <StyledMovieTitle>{movie.title}</StyledMovieTitle>
          </StyledMoviesItem>
        ))}
      </StyledMoviesList>
    </Section>
  );
}
