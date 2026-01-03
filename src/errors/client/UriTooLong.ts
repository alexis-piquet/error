import { CLIENT_ERROR_CODE_URI_TOO_LONG, CLIENT_ERROR_TYPE_URI_TOO_LONG } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class UriTooLong extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_URI_TOO_LONG, code: CLIENT_ERROR_CODE_URI_TOO_LONG })
	}
}