import { OperationVariables, useMutation } from "@apollo/client";
import * as mutation from "../graphql/mutation";

type TMutation = keyof typeof mutation;

export const useAppMutation = <T>(
  type: TMutation,
  options?: OperationVariables
) => useMutation<T>(mutation[type], options);
