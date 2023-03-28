import Billboard from '@/components/Billboard';
import InfoModal from '@/components/InfoModal';
import MovieCard from '@/components/MovieCard';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar';
import NavbarItem from '@/components/NavbarItem';
import useCurrentUser from '@/hooks/useCurrentUser';
import useFavorites from '@/hooks/useFavorite';
import useInfoModal from '@/hooks/useInfoModal';
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
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
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
        <MovieList title="My List">
          <div className="grid grid-cols-4 gap-2">
            {favorites.map((movie: Record<string, any>) => (
              <MovieCard key={movie.id} data={movie} />
            ))}
          </div>
        </MovieList>
      </div>
    </>
  );
}
