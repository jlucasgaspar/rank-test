import axios from 'axios';

type Params = {
  baseUrl: string;
  method: 'POST' | 'PUT' | 'DELETE' | 'GET';
}

export const makeHttpRequest = async <T = any>({ baseUrl, method }: Params) => {
  switch (method) {
    case 'DELETE':
      return await axios.delete<T>(baseUrl);
    case 'POST':
      return await axios.post<T>(baseUrl);
    case 'PUT':
      return await axios.put<T>(baseUrl);
    case 'GET':
      return await axios.get<T>(baseUrl);
    default:
      break;
  }
}