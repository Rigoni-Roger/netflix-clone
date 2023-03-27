import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useBillboard = () => {
  const response = useSWR('/api/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  return response
}

export default useBillboard