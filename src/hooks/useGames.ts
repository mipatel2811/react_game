import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";
import { GenreObject } from "./useGenre";
import { PlatformObject } from "./usePlatform";

export interface GamePlateform{
    id: number,
    name: string,
    slug: string
}

interface ParametersObj {
    ordering? : string,
    platforms? : string,
    genres? : number,
    search? : string
}
export interface GameObject {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: GamePlateform}[]
    metacritic: number
}
  
interface FetchGamesResponse {
    count: number;
    results: GameObject[];
}
  

const useGames = (selectedGenre : GenreObject | null, selectedPlatform: string | '' ,selectedSorting: string | '',searchGame:string | '', deps?: any[]) =>{
    const [games, setgames] = useState<GameObject[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const parameters : ParametersObj = {}; 
    if(selectedPlatform != ""){
        //parameters = {genres: selectedGenre?.id, platforms: selectedPlatform}
        parameters.platforms = selectedPlatform;
    }
    if(searchGame != ""){
        parameters.search = searchGame;
        
    }

    if(selectedSorting != ""){
        parameters.ordering = selectedSorting;
    }
    parameters.genres = selectedGenre?.id;
    
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games", {
            signal: controller.signal,
            params: parameters
        })
        .then((res) => {
            setgames(res.data.results); 
            setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
        });

        return () => controller.abort();
    },deps ? [...deps] : []);

    return {games, error, loading}
}

export default useGames;