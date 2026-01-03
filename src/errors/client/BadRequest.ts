import { CLIENT_ERROR_CODE_BAD_REQUEST, CLIENT_ERROR_TYPE_BAD_REQUEST } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class BadRequest extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_BAD_REQUEST, code: CLIENT_ERROR_CODE_BAD_REQUEST })
	}
}