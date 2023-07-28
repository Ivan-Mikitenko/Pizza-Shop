export type CartType = {
	id: number;
	imageUrl: string;
	price: number;
	quantity: number;
	sizes: number;
	title: string;
	type: number;
};

export type CartArrayType = CartType[];
