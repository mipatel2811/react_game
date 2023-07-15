import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";

export interface PlatformObject {
    id: number;
    name: string;
    slug: string,
}

interface FetchPlatformResponse {
    count: number;
    results: PlatformObject[];
}

const usePlateform = () => {
    const [platforms, setPlatform] = useState<PlatformObject[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchPlatformResponse>("/platforms", {signal: controller.signal})
        .then((res) => {
            setPlatform(res.data.results); 
            setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();
    },[]);

    return {platforms, error, loading}
}

export default usePlateform;