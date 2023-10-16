import { InferSchemaType, model, Schema } from "mongoose";

const mediaCardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String
    },
}, { timestamps: true });

type MediaCard = InferSchemaType<typeof mediaCardSchema>;

export default model<MediaCard>("MediaCard", mediaCardSchema);