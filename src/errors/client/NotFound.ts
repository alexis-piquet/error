import { CLIENT_ERROR_CODE_NOT_FOUND, CLIENT_ERROR_TYPE_NOT_FOUND } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class NotFound extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_NOT_FOUND, code: CLIENT_ERROR_CODE_NOT_FOUND })
	}
}