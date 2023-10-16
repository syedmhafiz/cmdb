interface MediaCardModel {
    _id: string,
    title: string,
    category: string,
    rating: number,
    review?: string,
    createdAt: string,
    updatedAt: string,
}

export default MediaCardModel;