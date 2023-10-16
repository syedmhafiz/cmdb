import axios from "axios";
import MediaCardModel from "../models/mediaCard";


export const fetchMediaCards = async (): Promise<MediaCardModel[]> => {
    try {
        const response = await axios.get("/api/medias");
        const mediaData = response.data;
        return mediaData;
    } catch (error) {
        console.error(error);
        alert(error);
        throw error;
    }
}

export interface MediaCardInput {
    title: string,
    category: string,
    rating: number;
    review?: string
}

export const createMediaCard = async (mediaCard: MediaCardInput): Promise<MediaCardModel> => {
    const response = await axios.post("/api/medias", mediaCard);
    return response.data;
}