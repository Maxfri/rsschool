import { BASE_URL } from '../api';

const GARAGE_URL = `${BASE_URL}/garage`;
const PAGE_LIMIT = 7;

export type Cars = { id: number, name: string, color: string, timer: NodeJS.Timeout, driveStatus: boolean };
type Body = { carName: string; carColor: string; };
type AllCars = { items: Cars[], count: string | null };

export const getCars = async (page: number, limit = PAGE_LIMIT):Promise<AllCars> => {
  const response = await fetch(`${GARAGE_URL}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number):Promise<Cars> => (await fetch(`${GARAGE_URL}/${id}`)).json();

export const createCar = async (body: Body): Promise<JSON> => (await fetch(`${GARAGE_URL}`, {
  method: 'POST',
  body: JSON.stringify({
    name: body.carName,
    color: body.carColor,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})).json();

export const deleteCar = async (id: number): Promise<JSON> => (await fetch(`
${GARAGE_URL}/${id}
`, { method: 'DELETE' })).json();

export const updateCar = async (id: number, body: Body): Promise<JSON> => (await fetch(`
${GARAGE_URL}/${id}
`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: body.carName,
    color: body.carColor,
  }),
})).json();
