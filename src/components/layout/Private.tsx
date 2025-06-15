import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator
} from '../ui/breadcrumb'
import { FC, ReactNode } from 'react'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from '../ui/sidebar'
import Link from 'next/link'
import { Button } from '../ui/button'
import { LogOut, Settings } from 'lucide-react'


export interface Props {
	readonly children: ReactNode
}

const menuItems = [{
	key: 'home',
	title: 'Home',
	url: '/',
}]

const sidebarContent = menuItems.map(({ key, title, url }) =>
	<SidebarMenuItem key={key}>
		<SidebarMenuButton asChild>
			<Link href={url}>{title}</Link>
		</SidebarMenuButton>
	</SidebarMenuItem>)

const Component: FC<Props> = ({ children }) =>
	<SidebarProvider>
		<Sidebar>
			<SidebarHeader>
				<h1>HomeFinder</h1>
			</SidebarHeader>
			<SidebarContent>
				<SidebarMenu>
					{sidebarContent}
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter>
				<div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
					<Button variant='outline'>
						<Settings />
					</Button>
					<Button variant='outline'>
						<LogOut />
					</Button>
				</div>
			</SidebarFooter>
		</Sidebar>
		<SidebarInset>
			<header>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<SidebarTrigger />
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							Home
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</header>
			<main>
				{children}
			</main>
		</SidebarInset>
	</SidebarProvider>

export { Component as Private }
