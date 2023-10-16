import React from 'react';
import MediaCardModel  from '../../models/mediaCard';
import formatDate from '../../utils/FormatDate';

interface MediaCardProps {
    mediaCard: MediaCardModel
}

const MediaCard = ({ mediaCard }: MediaCardProps) => {
    const {
        title,
        category,
        rating,
        review,
        createdAt,
        updatedAt
    } = mediaCard;
    const url = "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg";

    let createdUpdatedText: string;
    if (updatedAt > createdAt) {
        createdUpdatedText = `Updated: ${formatDate(updatedAt)}`;
    } else {
        createdUpdatedText = `Created: ${formatDate(createdAt)}`;
    }

    return (
        <div className="card card-side card-bordered w-[28rem] h-[20rem] bg-base-200 shadow-md mx-auto">
            <div className='flex flex-col justify-center item-center p-4 w-full'>
                <div className="h-[50%] flex justify-start">
                    <img src={url} alt="Movie" className="w-24 h-36 rounded-md" />
                    <div className='pl-8 flex flex-col gap-3'>
                        <h2 className="card-title text-3xl"><b>{title}</b></h2>
                        <h4 className="text-sm">Category: <b>{category}</b></h4>
                        <h4 className='text-sm'>Genre: </h4>
                        <h2 className='text-lg'>Rating: <b>{rating}</b> /<span className='text-sm'>10</span></h2>
                    </div>
                </div>
                <div className='h-[50%] mt-1 flex flex-col justify-around'>
                    <div>
                        <span className='text-sm'>Review:</span>
                        <p className='text-md'>{review}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p className='text-sm font-light'>{createdUpdatedText}</p>
                        <div className='flex gap-2'>
                            <button className='btn btn-outline btn-warning btn-sm'>Update</button>
                            <button className="btn btn-primary btn-sm">Visit RT</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default MediaCard;