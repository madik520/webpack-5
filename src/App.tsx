import { FC, useState } from "react"

interface IButton {
	text: string;
	click: () => void
}

const Button:FC<IButton> = ({text, click}) => {
	return(
		<button onClick={click}>{text}</button>
	)
}

export const App = () => {
	const [count, setCount] = useState<number>(0);

	const handleClick = () => setCount((count) => count + 1)

	return(
		<div className="container">
			<h1>This is Webpack 5 Template</h1>
			<p>React/TypeScript Configuration</p>
			<div className="count-wrapper">
				<Button click={handleClick} text="click here"/>
				<span>{count}</span>
			</div>
		</div>
	)
}