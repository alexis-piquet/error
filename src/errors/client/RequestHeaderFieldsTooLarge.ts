import { CLIENT_ERROR_CODE_REQUEST_HEADER_FIELDS_TOO_LARGE, CLIENT_ERROR_TYPE_REQUEST_HEADER_FIELDS_TOO_LARGE } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class RequestHeaderFieldsTooLarge extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_REQUEST_HEADER_FIELDS_TOO_LARGE, code: CLIENT_ERROR_CODE_REQUEST_HEADER_FIELDS_TOO_LARGE })
	}
}