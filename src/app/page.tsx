import { FC } from 'react'
import { Private } from '@/components/layout/Private'
import { Public } from '@/components/layout/Public'

const authenticated = false

const Component: FC = () =>
	authenticated ? (
		<Public>
			<h1>Index Page</h1>
		</Public>
	) : (
		<Private>
			<h1>Index Page</h1>
		</Private>
	)

export default Component