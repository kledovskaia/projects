import { useQuery } from "@apollo/client"
import * as queries from "../helpers/queries"

type TRequest = keyof typeof queries

export const useRequest = <T>(type: TRequest, options?: any) => {
  return useQuery<T>(queries[type], options)
}
