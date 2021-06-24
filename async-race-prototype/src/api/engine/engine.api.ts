import { BASE_URL } from '../api';

const ENGINE_URL = `${BASE_URL}/engine`;
const SUCCESS = 200;

export type Status = 'start' | 'stop';

type VelocityDistance = { velocity: number, distance: number };

type ResultDrive = { success: boolean } | { JSON: Promise<JSON> };

export const startEngine = async (id: number): Promise<VelocityDistance> => (await fetch(`
${ENGINE_URL}?id=${id}&status=started
`)).json();

export const stopEngine = async (id: number): Promise<VelocityDistance> => (await fetch(`
${ENGINE_URL}?id=${id}&status=stopped
`)).json();

export const drive = async (id: number): Promise<ResultDrive> => {
  const result = await fetch(`${ENGINE_URL}?id=${id}&status=drive`).catch();

  return result.status !== SUCCESS ? { success: false } : { ...(await result.json()) };
};
