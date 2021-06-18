import { BASE_URL } from '../api';

const WINNERS_URL = `${BASE_URL}/winners`;

type Sort = 'id' | 'wins' | 'time';

type Order = 'ASC' | 'DESC';

type Body = { id: number, wins: number, time: number };

type Parametrs = { page: number, limit: number, sort: Sort, order: Order };

export const getWinner = async (id: number) => (await fetch(`${WINNERS_URL}/${id}`)).json();

export const getWinners = async (page: number, limit = 10, sort: Sort, order: Order) => {
  const response = await fetch(`${WINNERS_URL}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const createWinners = async (body: Body) => (await fetch(`${WINNERS_URL}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(body),
})).json();

export const deleteWinner = async (id: number) => (await fetch(`${WINNERS_URL}/${id}`, { method: 'DELETE' })).json();

export const updateWinner = async (id: number, body: Body) => (await fetch(`${WINNERS_URL}/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(body),
})).json();

export const saveWinner = async (id: number, time: number) => {

};
