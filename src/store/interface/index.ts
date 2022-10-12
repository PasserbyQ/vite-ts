/* themeConfigProp */
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	isGrey: boolean;
	isWeak: boolean;
}

/* GlobalState */
export interface GlobalState {
	token: string;
	userInfo: any;
}

/* MenuState */
export interface MenuState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
}

/* TabsState */
export interface TabsState {
	tabsMenuValue: string;
	tabsMenuList: Menu.MenuOptions[];
}

/* AuthState */
export interface AuthState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}
