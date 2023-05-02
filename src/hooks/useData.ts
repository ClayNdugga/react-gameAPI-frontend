import { useEffect, useState } from "react";
import apiClient, { FetchResponse } from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";




const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {  //? makes request optional
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, {...requestConfig, signal: controller.signal})    //signal contains axios config config object
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            })

        return () => controller.abort()
    }, deps ? [...deps] : [])

    return {data, isLoading, error}
}

export default useData;