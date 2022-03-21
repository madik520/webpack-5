import { FC } from 'react';

import classNames from 'classnames';
import { IButton } from './Button';

const Button:FC<IButton> = ({ 
	onClick, 
	disabled, 
	customClass, 
	isActive, 
	isActiveClass, 
	value  
}) => {

	const classes = () => classNames(customClass, {
		[`${isActiveClass}`]: isActive
	})

	return(
		<button 
			onClick={onClick} 
			className={classes()}
			disabled={disabled}
		>
			{value}
		</button>
	)
}

export default Button;