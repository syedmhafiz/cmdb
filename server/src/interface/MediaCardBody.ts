interface MediaCardBody {
    title?: string,
    category?: string,
    rating?: number,
    review?: string
}

interface MediaCardParams {
    mediaCardId: string,
}

export {
    MediaCardBody,
    MediaCardParams
}