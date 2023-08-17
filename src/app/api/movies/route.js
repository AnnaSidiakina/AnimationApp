export async function GET(request) {
  let res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res.json();
}
