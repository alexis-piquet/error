import { CLIENT_ERROR_CODE_UNAUTHORIZED, CLIENT_ERROR_TYPE_UNAUTHORIZED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class Unauthorized extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_UNAUTHORIZED, code: CLIENT_ERROR_CODE_UNAUTHORIZED })
	}
}