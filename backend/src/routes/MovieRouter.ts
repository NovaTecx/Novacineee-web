import {Router} from 'express';
import { MovieController } from '../controllers/MovieControler';

const router = Router();

router.get('/' , MovieController.getPopular)
router.get('/genres/:genreId' , MovieController.getGenres)
router.get('/:LangId' , MovieController.getLanguajes)














export default router;

