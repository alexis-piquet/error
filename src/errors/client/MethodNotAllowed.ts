import { CLIENT_ERROR_CODE_METHOD_NOT_ALLOWED, CLIENT_ERROR_TYPE_METHOD_NOT_ALLOWED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class MethodNotAllowed extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_METHOD_NOT_ALLOWED, code: CLIENT_ERROR_CODE_METHOD_NOT_ALLOWED })
	}
}