import { CLIENT_ERROR_CODE_CONFLICT, CLIENT_ERROR_TYPE_CONFLICT } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class Conflict extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_CONFLICT, code: CLIENT_ERROR_CODE_CONFLICT })
	}
}