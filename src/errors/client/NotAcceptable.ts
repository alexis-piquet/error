import { CLIENT_ERROR_CODE_NOT_ACCEPTABLE, CLIENT_ERROR_TYPE_NOT_ACCEPTABLE } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class NotAcceptable extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_NOT_ACCEPTABLE, code: CLIENT_ERROR_CODE_NOT_ACCEPTABLE })
	}
}