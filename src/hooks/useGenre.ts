import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";

export interface GenreObject {
    id: number;
    name: string;
    slug: string,
    image_background: string
}

interface FetchGenreResponse {
    count: number;
    results: GenreObject[];
}
  

const useGenre = () => {
    const [genres, setgenre] = useState<GenreObject[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGenreResponse>("/genres", {signal: controller.signal})
        .then((res) => {
            setgenre(res.data.results); 
            setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();
    },[]);

    return {genres, error, loading}
}

export default useGenre;