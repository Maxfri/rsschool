import { BASE_URL } from "../api";

const ENGINE_URL = `${BASE_URL}/engine`;

export type Status = 'start' | 'stop';

export const startEngine = async (id: number) => (await fetch(`${ENGINE_URL}?id=${id}&status=started`)).json();

export const stopEngine = async (id: number) => (await fetch(`${ENGINE_URL}?id=${id}&status=stopped`)).json();

export const drive = async (id: number) => {
  const result = await fetch(`${ENGINE_URL}?id=${id}&status=drive`).catch();

  return result.status !== 200 ? { success: false } : { ...(await result.json()) };
};