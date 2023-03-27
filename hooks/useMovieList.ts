import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useMovieList = () => {
  const response = useSWR('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  return response
}

export default useMovieList