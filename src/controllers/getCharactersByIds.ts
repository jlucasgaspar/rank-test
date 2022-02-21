import { RequestHandler } from 'express';
import { httpRequest } from '@/provider/http';
import { Character } from '@/types/Character';

type Params = { ids: string; }
type Return = Character[];

export const getCharactersByIds: RequestHandler<Params, Return> = async (request, response) => {
  const { ids } = request.params;
  
  const res = await httpRequest.get<Character[]>(`/character/${ids}`);

  if (!res) {
    throw new Error('Not found any characters.');
  }

  return response.json(res.data);
}