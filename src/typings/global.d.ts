// * Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
		single?: boolean,
		i18n: string,
	}
}

// * Vite
declare type Recordable<T = any> = Record<string, T>;
