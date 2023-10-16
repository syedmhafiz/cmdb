import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { MediaCardBody, MediaCardParams } from "../interface/MediaCardBody";
import MediaCardModel from "../models/MediaCard";

const getMediaCards: RequestHandler = async (req, res, next) => {
    try {
        const mediaCards = await MediaCardModel.find().exec();
        res.status(200).json(mediaCards);
    } catch (error) {
        next(error);
    }
}

const getOneMediaCard: RequestHandler = async (req, res, next) => {
    const mediaCardId = req?.params?.mediaCardId;

    try {
        if (!mongoose.isValidObjectId(mediaCardId)) {
            throw createHttpError(400, "Invalid media card id");
        }

        const mediaCard = await MediaCardModel.findById(mediaCardId).exec();

        if (!mediaCard) {
            throw createHttpError(404, "Media card not found");
        }
        res.status(200).json(mediaCard);        
    } catch (error) {
        next(error);
    }
}

const createMediaCard: RequestHandler<unknown, unknown, MediaCardBody, unknown> = async (req, res, next) => {
    const title = req?.body?.title;
    const category = req?.body?.category;
    const rating = req?.body?.rating;
    const review = req?.body?.review;

    try {
        if (!title) {
            throw createHttpError(400, "Media Card must have a title");
        }
        if (!category) {
            throw createHttpError(400, "Media Card must have a category");
        }
        if (!rating) {
            throw createHttpError(400, "Media Card must have a rating");
        }

        await MediaCardModel.create({
            title: title,
            category: category,
            rating: rating,
            review: review
        });
        res.status(201).json({ success: true, message: "A media card has been added" });
    } catch (error) {
        next(error);
    }
}

const updateMediaCard: RequestHandler<MediaCardParams, unknown, MediaCardBody, unknown> = async (req, res, next) => {
    const mediaCardId = req.params.mediaCardId;
    const newTitle = req.body.title;
    const newCategory = req.body.category;
    const newRating = req.body.rating;
    const newReview = req.body.review;
    
    try {
        if (!mongoose.isValidObjectId(mediaCardId)) {
            throw createHttpError(400, "Invalid media card id");
        }

        if (!newTitle && !newCategory && !newRating && !newReview) {
            throw createHttpError(400, "One of the fields should get updated");
        }
        const mediaCard = await MediaCardModel.findById(mediaCardId).exec();

        if (!mediaCard) {
            throw createHttpError(404, "Media card not found");
        }

        mediaCard.title = newTitle || mediaCard.title;
        mediaCard.category = newCategory || mediaCard.category;
        mediaCard.rating = newRating || mediaCard.rating;
        mediaCard.review = newReview || mediaCard.review;

        const updatedMediaCard = await mediaCard.save();

        res.status(200).json(updatedMediaCard);
    } catch (error) {
        next(error)
    }
}

const deleteMediaCard: RequestHandler = async (req, res, next) => {
    const mediaCardId = req.params.mediaCardId;


    try {
        if (!mongoose.isValidObjectId(mediaCardId)) {
            throw createHttpError(400, "Invalid media card id");
        }

        const mediaCard = await MediaCardModel.findById(mediaCardId).exec();

        if (!mediaCard) {
            throw createHttpError(404, "Media card not found");
        }

        await mediaCard.deleteOne({ _id: mediaCardId});
        res.status(201).json({ success: true, message: 'Media card has been deleted' });
    } catch (error) {
        next(error);
    }
}

export default {
    getMediaCards,
    getOneMediaCard,
    createMediaCard,
    updateMediaCard,
    deleteMediaCard
}