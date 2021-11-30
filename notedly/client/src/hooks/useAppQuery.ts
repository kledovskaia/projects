import { OperationVariables, useQuery } from "@apollo/client"
import * as queries from "../graphql/queries"

type TQuery = keyof typeof queries

export const useAppQuery = <T>(type: TQuery, options?: OperationVariables) => {
  return useQuery<T>(queries[type], options)
}
