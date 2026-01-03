import { CLIENT_ERROR_CODE_LENGTH_REQUIRED, CLIENT_ERROR_TYPE_LENGTH_REQUIRED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class LengthRequired extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_LENGTH_REQUIRED, code: CLIENT_ERROR_CODE_LENGTH_REQUIRED })
	}
}