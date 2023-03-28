import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useMovie = (id?: string) => {
  const response = useSWR(id ? `/api/movies/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  return response
}

export default useMovie