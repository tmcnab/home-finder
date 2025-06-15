import './globals.css'
import { FC, ReactNode } from 'react'
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home Finder',
}

export interface Props {
	readonly children: ReactNode
}

const Component: FC<Props> = ({ children }) =>
	<html lang='en' suppressHydrationWarning>
		<body>
			<ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
				{children}
			</ThemeProvider>
		</body>
	</html>

export default Component
