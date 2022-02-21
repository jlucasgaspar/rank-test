import { RequestHandler } from 'express';
import { makeHttpRequest } from '@/provider/http';
import { Character } from '@/types/Character';

export const getAllCharacters: RequestHandler = async (request, response) => {
  const { page } = request.query;

  const query = page ? `?page=${page}` : '';

  const res = await makeHttpRequest<{ results: Character[] }>({
    method: 'GET',
    url: `/character${query}`
  });

  if (!res) {
    throw new Error('Not found any characters.');
  }

  return response.json(res.data.results);
}