import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios"
import type { AxiosRequestConfig } from "axios";


interface FetchResponse<T> {
  count: number;
  results: T[];
}

interface APIErrorResponse {
  message?: string;
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err: AxiosError<APIErrorResponse>) => {
        if (err.name === "CanceledError") return;

        if (isMounted) {
          setError(err.response?.data?.message || err.message || "An error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [endpoint, requestConfig, ...(deps || [])]);

  return { data, error, isLoading };
};

export default useData;
