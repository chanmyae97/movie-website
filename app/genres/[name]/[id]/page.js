import Moives from "@/components/Movies";

const token = process.env.TMDB_TOKEN;

async function fetchMovies(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await res.json();
}

export default async function Home({ params }) {
  const { id, name } = await params;
  const genreId = id;
  const byGenres = await fetchMovies(genreId);

  return (
    <>
      <h3 className="font-bold border-b mb-4 pb-2">{name}</h3>
      <Moives movies={byGenres.results} />
    </>
  );
}
