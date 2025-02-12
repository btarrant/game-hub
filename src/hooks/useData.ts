import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { AxiosError, isCancel } from "axios";
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
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err: AxiosError<APIErrorResponse>) => {
        if (axios.isCancel(err)) return;

        if (isMounted) {
          setError(err.response?.data?.message || err.message || "An error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint, requestConfig, ...(deps || [])]);

  // ✅ Add a return statement to ensure the hook provides the expected object
  return { data, error, isLoading };
};

export default useData;
