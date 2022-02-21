import { Router } from 'express';
import { getAllCharacters } from '@/controllers/getAllCharacters';
import { getCharactersByIds } from '@/controllers/getCharactersByIds';
import { getAllEpisodesByCharacter } from './controllers/getAllEpisodesByCharacter';

const router = Router();

router.get('/all', getAllCharacters);
router.get('/byIds/:ids', getCharactersByIds);
router.get('/episodes/byCharacterId/:id', getAllEpisodesByCharacter);

export { router }