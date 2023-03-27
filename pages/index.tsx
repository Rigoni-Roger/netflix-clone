import Billboard from '@/components/Billboard';
import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import NavbarItem from '@/components/NavbarItem';
import useCurrentUser from '@/hooks/useCurrentUser';
import useMovieList from '@/hooks/useMovieList';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  return (
    <>
      <Navbar>
        <NavbarItem label="Home" />
        <NavbarItem label="Series" />
        <NavbarItem label="Films" />
        <NavbarItem label="New & Popular" />
        <NavbarItem label="My List" />
        <NavbarItem label="Browse by Languages" />
      </Navbar>
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now">
          <div className="grid grid-cols-4 gap-2">
            {movies.map((movie: Record<string, any>) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        </MovieList>
      </div>
    </>
  );
}
