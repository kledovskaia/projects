import { OperationVariables, useMutation } from "@apollo/client"
import * as mutations from "../graphql/mutations"

type TMutation = keyof typeof mutations

export const useAppMutation = <T>(
  type: TMutation,
  options?: OperationVariables
) => {
  return useMutation<T>(mutations[type], options)
}
