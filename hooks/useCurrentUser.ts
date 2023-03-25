import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useCurrentUser = () => {
  const results = useSWR('/api/current', fetcher)

  return results
}

export default useCurrentUser;