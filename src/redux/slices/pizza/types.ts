import { DataPizzaArrayType } from '../../../types/dataPizza';

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error'
}

export interface PizzaSlice {
	items: DataPizzaArrayType;
	status: Status;
}
