import { CLIENT_ERROR_CODE_TOO_MANY_REQUESTS, CLIENT_ERROR_TYPE_TOO_MANY_REQUESTS } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class TooManyRequests extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_TOO_MANY_REQUESTS, code: CLIENT_ERROR_CODE_TOO_MANY_REQUESTS })
	}
}