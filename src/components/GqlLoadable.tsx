import { QueryResult } from "@apollo/client";
import React, { ReactElement } from "react";

interface GqlLoadableProps<T> {
  render: (data: T) => ReactElement;
  loading?: () => ReactElement;
  error?: (err: Error) => ReactElement;
  noData?: () => ReactElement;
  queryResult: QueryResult<T>;
}

function GqlLoadable<T>({
  render,
  queryResult,
  loading = () => <span>loading</span>,
  error = (e) => <span>{e.message}</span>,
  noData = () => <span>no data</span>,
}: GqlLoadableProps<T>) {
  if (queryResult.loading) {
    return loading();
  }

  if (queryResult.error) {
    return error(queryResult.error);
  }

  if (!queryResult.data) {
    return noData();
  }
  return render(queryResult.data);
}

export default GqlLoadable;
