import { Nullable } from "@/types/Nullable"

export interface Profile {
	authentication: {
		authenticated: boolean
		email: Nullable<string>
		name: {
			given: Nullable<string>
			family: Nullable<string>
		}
	}
	authorization: {
		administrator: boolean
		uid: Nullable<string>
	}
}

export const useProfile = (): Profile => {
	
}