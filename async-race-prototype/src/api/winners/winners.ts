import { BASE_URL } from '../api';

const WINNERS_URL = `${BASE_URL}/winners`;
const PAGE_LIMIT = 10;

export type Sort = 'id' | 'wins' | 'time';

export type Order = 'ASC' | 'DESC';

type Body = { id: number, wins: number, time: number };

type Winner = { id: number, name: string, color: string, wins: number, time: number };

type AllWinners = { items: Winner[], count: string | null };

export const getWinner = async (id: number): Promise<Winner> => (await fetch(`${WINNERS_URL}/${id}`)).json();

export const getWinners = async (page: number, limit = PAGE_LIMIT, sort: Sort, order: Order): Promise<AllWinners> => {
  const response = await fetch(`
    ${WINNERS_URL}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}
  `);
  const winners = await response.json();
  return {
    items: winners,
    count: response.headers.get('X-Total-Count'),
  };
};

export const createWinner = async (body: Body): Promise<Winner> => (await fetch(`${WINNERS_URL}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})).json();

export const deleteWinner = async (id: number): Promise<Winner> => (await fetch(`
${WINNERS_URL}/${id}`, { method: 'DELETE' })).json();

export const updateWinner = async (id: number, body: Body): Promise<Winner> => (await fetch(`
${WINNERS_URL}/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})).json();
