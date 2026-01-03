import { CLIENT_ERROR_CODE_FORBIDDEN,CLIENT_ERROR_TYPE_FORBIDDEN } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class Forbidden extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_FORBIDDEN, code: CLIENT_ERROR_CODE_FORBIDDEN })
	}
}