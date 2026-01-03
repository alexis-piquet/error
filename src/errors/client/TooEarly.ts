import { CLIENT_ERROR_CODE_TOO_EARLY, CLIENT_ERROR_TYPE_TOO_EARLY } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class TooEarly extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_TOO_EARLY, code: CLIENT_ERROR_CODE_TOO_EARLY })
	}
}