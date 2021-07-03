import { BASE_URL } from '../api';

const ENGINE_URL = `${BASE_URL}/engine`;
const STATUS_SUCCESS = 200;
const ENGINE_START = 'started';
const ENGINE_STOP = 'stopped';
const ENGINE_DRIVE = 'drive';

export type Status = 'start' | 'stop';

type VelocityDistance = { velocity: number, distance: number };

type ResultDrive = { JSON: Promise<JSON>; success: boolean };

export const startEngine = async (id: number): Promise<VelocityDistance> => (await fetch(`
${ENGINE_URL}?id=${id}&status=${ENGINE_START}
`)).json();

export const stopEngine = async (id: number): Promise<VelocityDistance> => (await fetch(`
${ENGINE_URL}?id=${id}&status=${ENGINE_STOP}
`)).json();

export const drive = async (id: number): Promise<ResultDrive> => {
  const result = await fetch(`${ENGINE_URL}?id=${id}&status=${ENGINE_DRIVE}`).catch();

  return result.status !== STATUS_SUCCESS ? { success: false } : { ...(await result.json()) };
};
