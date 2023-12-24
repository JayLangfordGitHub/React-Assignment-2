import express from 'express';
import Genres from './genreModel';

const router = express.Router(); 

router.get('/', async (req, res) => {
    const genres = await Genres.find();
    res.status(200).json(genres);
});

export default router;