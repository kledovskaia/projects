import { OperationVariables, useQuery } from "@apollo/client";
import * as query from "../graphql/query";

type TQuery = keyof typeof query;

export const useAppQuery = <T>(type: TQuery, options?: OperationVariables) =>
  useQuery<T>(query[type], options);
