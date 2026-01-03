import { CLIENT_ERROR_CODE_GONE, CLIENT_ERROR_TYPE_GONE } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class Gone extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_GONE, code: CLIENT_ERROR_CODE_GONE })
	}
}