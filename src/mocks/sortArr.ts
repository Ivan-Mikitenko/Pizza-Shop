import { SortType } from '../types/sortType';

export const sortArr: SortType = [
	{
		id: 0,
		titleSort: 'популярности',
		sortProperty: 'rating',
		order: 'desc'
	},
	{
		id: 1,
		titleSort: 'возврастанию цены',
		sortProperty: 'price',
		order: 'asc'
	},
	{
		id: 2,
		titleSort: 'убыванию цены',
		sortProperty: 'price',
		order: 'desc'
	},
	{
		id: 3,
		titleSort: 'названию',
		sortProperty: 'title',
		order: 'asc'
	}
];
