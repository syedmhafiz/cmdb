import express from "express";
import MediaCardsController from "../controllers/MediaCards";

const router = express.Router();

router.get('/', MediaCardsController.getMediaCards);
router.get('/:mediaCardId', MediaCardsController.getOneMediaCard);
router.post('/', MediaCardsController.createMediaCard);
router.patch('/:mediaCardId', MediaCardsController.updateMediaCard);
router.delete('/:mediaCardId', MediaCardsController.deleteMediaCard)

export default router;