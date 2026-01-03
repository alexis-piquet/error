import { CLIENT_ERROR_CODE_REQUEST_TIMEOUT, CLIENT_ERROR_TYPE_REQUEST_TIMEOUT } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class RequestTimeout extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_REQUEST_TIMEOUT, code: CLIENT_ERROR_CODE_REQUEST_TIMEOUT })
	}
}