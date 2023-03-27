import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useFavorites = () => {
  const response = useSWR('/api/favorites', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false
  })
  return response
}

export default useFavorites