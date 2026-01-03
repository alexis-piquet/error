export const SERVER_ERROR_TYPE_INTERNAL_SERVER_ERROR = 'internal-server-error'

export const SERVER_ERROR_TYPES = {
	INTERNAL_SERVER_ERROR: SERVER_ERROR_TYPE_INTERNAL_SERVER_ERROR,
} as const 

export const SERVER_ERROR_CODE_INTERNAL_SERVER_ERROR = 500

export const SERVER_ERROR_CODES = {
	INTERNAL_SERVER_ERROR: SERVER_ERROR_CODE_INTERNAL_SERVER_ERROR,
} as const

export const SERVER_CODES = [
	SERVER_ERROR_CODE_INTERNAL_SERVER_ERROR,
] as const

export type ServerCode = typeof SERVER_CODES[number]
export type ServerErrorType = typeof SERVER_ERROR_TYPES[keyof typeof SERVER_ERROR_TYPES]
export type ServerErrorCode = typeof SERVER_ERROR_CODES[keyof typeof SERVER_ERROR_CODES]