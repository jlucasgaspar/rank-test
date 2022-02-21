import axios from 'axios';

type Params = {
  url: string;
  method: 'POST' | 'PUT' | 'DELETE' | 'GET';
}

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

export const makeHttpRequest = async <T = any>({ url, method }: Params) => {
  switch (method) {
    case 'DELETE':
      return await api.delete<T>(url);
    case 'POST':
      return await api.post<T>(url);
    case 'PUT':
      return await api.put<T>(url);
    case 'GET':
      return await api.get<T>(url);
    default:
      break;
  }
}