import { BASE_URL } from '../api';
import { getCar } from '../garage/garage.api';

const WINNERS_URL = `${BASE_URL}/winners`;

type Sort = 'id' | 'wins' | 'time';

type Order = 'ASC' | 'DESC';

type Body = { id: number, wins: number, time: number };

type Parametrs = { page: number, limit: number, sort: Sort, order: Order };

type Winner = { id: number, name: string, color: string, wins: number, time: number };

export const getWinner = async (id: number) => (await fetch(`${WINNERS_URL}/${id}`)).json();

export const getWinners = async (page: number, limit = 10, sort: Sort, order: Order) => {
  const response = await fetch(`${WINNERS_URL}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  const winners = await response.json();
  winners.map(async (winner: Winner) => {
    const car = await getCar(winner.id);
    winner.name = car.name;
    winner.color = car.color;
  });
  return {
    items: winners,
    count: response.headers.get('X-Total-Count'),
  };
};

export const createWinner = async (body: Body) => (await fetch(`${WINNERS_URL}`, {
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
