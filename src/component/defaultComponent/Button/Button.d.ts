export interface IButton {
	value: string;
	isActive?: boolean;
	isActiveClass?: string;
	customClass?: string;
	disabled?: boolean;
	onClick: () => void;
}