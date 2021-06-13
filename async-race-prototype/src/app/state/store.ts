// import { getWinners } from './../../api/winners/winners.api';
import { getCars } from './../../api/garage/garage.api';

// const { items: cars, count: carsCount } = async() => await getCars(1);

// const cars = async() => await getCars(1);


// const { items: winners, count: winnersCount } = await getWinners({ page: 1, limit: 10, sort: 'id', order: 'ASC' });

export default {
  carPage: 1,
  // cars,
  // carsCount,
  winnersPage: 1,
  // winners,
  // winnersCount,
  animation: {},
  view: 'garage',
  sortdBy: null,
  sortOrder: null,
}