import { FC, ReactNode } from 'react'

export interface Props {
	readonly children: ReactNode
}

const Component: FC<Props> = ({ children }) =>
	<>
		<header>
			<h1>Home Finder</h1>
		</header>
		<main>
			{children}
		</main>
	</>

export { Component as Public }
