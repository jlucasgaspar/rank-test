import { RequestHandler } from 'express';
import { makeHttpRequest } from '@/provider/http';
import { Character } from '@/types/Character';

type Params = { id: string; }

export const getAllEpisodesByCharacter: RequestHandler<Params> = async (request, response) => {
  const { id } = request.params;

  const res = await makeHttpRequest<Character>({
    method: 'GET',
    url: `/character/${id}`
  });

  if (!res) {
    throw new Error('Not found any character.');
  }

  const finalListIds = res.data.episode
    .map(episodeUrlId => episodeUrlId.replace('https://rickandmortyapi.com/api/episode/', ''))
    .join(',');
  
  const episodes = await makeHttpRequest({
    method: 'GET',
    url: `/episode/${finalListIds}`
  });

  if (!episodes) {
    throw new Error(`Error on finding episodes ${finalListIds}`);
  }

  return response.json(episodes.data);
}