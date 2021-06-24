import { BASE_URL } from '../api';

const ENGINE_URL = `${BASE_URL}/engine`;

export type Status = 'start' | 'stop';

type VelocityDistance = { velocity: number, distance: number };

export const startEngine = async (id: number): Promise<VelocityDistance> => (await fetch(`
${ENGINE_URL}?id=${id}&status=started
`)).json();

export const stopEngine = async (id: number): Promise<VelocityDistance> => (await fetch(`
${ENGINE_URL}?id=${id}&status=stopped
`)).json();

export const drive = async (id: number) => {
  const result = await fetch(`${ENGINE_URL}?id=${id}&status=drive`).catch();

  return result.status !== 200 ? { success: false } : { ...(await result.json()) };
};
