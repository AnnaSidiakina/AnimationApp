import Movies from "@/components/Movies/Movies";

export async function getMovies() {
  let res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
}

export default async function MoviesPage() {
  const { results } = await getMovies();

  return <Movies movies={results} />;
}
