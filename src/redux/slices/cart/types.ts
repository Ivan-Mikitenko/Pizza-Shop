import { CartArrayType } from '../../../types/cartType';

export interface CartSlice {
	totalPrice: number;
	totalQuantity: 0;
	items: CartArrayType;
}
