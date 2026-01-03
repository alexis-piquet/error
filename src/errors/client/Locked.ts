import { CLIENT_ERROR_CODE_LOCKED, CLIENT_ERROR_TYPE_LOCKED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class Locked extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_LOCKED, code: CLIENT_ERROR_CODE_LOCKED })
	}
}