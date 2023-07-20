export type SortItem = {
	id: number;
	titleSort: string;
	sortProperty: string;
	order: 'asc' | 'desc';
};

export type SortType = SortItem[];
