import Moives from "@/components/Movies";

const token = process.env.TMDB_TOKEN;

async function fetchPopular() {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

async function fetchTrending() {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/day", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
}

export default async function Home() {
  const popular = await fetchPopular();
  const trending = await fetchTrending();
  return (
    <div>
      <h3 className="font-bold border-b my-4 pb-2">Popular</h3>
      <Moives movies={popular.results} />

      <h3 className="font-bold border-b my-4 pb-2">Trending</h3>
      <Moives movies={trending.results} />
    </div>
  );
}
