declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module '*.png' {
	const value: never;
	export default value;
}

declare module 'redux-persist/lib/storage';
