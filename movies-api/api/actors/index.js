import { getMovieActor } from '../tmdb-api';
import { getMovieActors } from '../tmdb-api';
import { getMovieActorImages } from '../tmdb-api';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query;
        [page, limit] = [+page, +limit];

        const actors = await getMovieActors({ queryKey: [null, { page }] });
        res.status(200).json(actors);
    } catch (error) {
        console.error('Backend Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));


router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const actor = await getMovieActor(id);
    if (actor) {
        res.status(200).json(actor);
    } else {
        res.status(404).json({message: 'The actor you requested could not be found.', status_code: 404});
    }
}));

// Get actor images
router.get('/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const images = await getMovieActorImages({ queryKey: [null, { id }] });
    res.status(200).json(images);
}));

export default router;