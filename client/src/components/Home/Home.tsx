import React, { useEffect, useState } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import MediaCardModel from '../../models/mediaCard';
import * as MediaCardsApi from "../../network/MediaCards_api";
import AddMediaCardDialog from './AddMediaCardDialog';

const Home = () => {
    const [mediaCards, setMediaCards] = useState<MediaCardModel[]>([]);

    useEffect(() => {
        const loadMedias = async () => {
            try {
                const mediaCards = await MediaCardsApi.fetchMediaCards();
                setMediaCards(mediaCards);
            } catch (error) {
                console.error(error);
                alert(error);
            }
        }
        loadMedias();
    }, []);

    if (mediaCards.length === 0) {
        return (
            <div className='flex justify-center items-center h-[600px]'>
                <h2 className='text-4xl font-bold'>
                    No Media Cards found!
                </h2>
            </div>
        )
    }

    return (
        <>
            <div className='w-[80%] mt-6 mx-auto'>
                <div className='flex justify-end mr-7'>
                    <AddMediaCardDialog></AddMediaCardDialog>
                </div>
                <div className="m-4 p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto">
                    {
                        mediaCards.map(mediaCard => 
                            <MediaCard mediaCard={mediaCard} key={mediaCard._id}></MediaCard>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default Home;