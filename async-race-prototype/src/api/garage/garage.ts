export const getCars = async(page: number, limit = 7) => {
  const response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=${limit}`);

  return {
    item: await response.json(),
    count: response.headers.get('X-Total-Count')
  };
}