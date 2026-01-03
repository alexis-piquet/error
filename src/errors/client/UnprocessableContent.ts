import { CLIENT_ERROR_CODE_UNPROCESSABLE_CONTENT, CLIENT_ERROR_TYPE_UNPROCESSABLE_CONTENT } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class UnprocessableContent extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_UNPROCESSABLE_CONTENT, code: CLIENT_ERROR_CODE_UNPROCESSABLE_CONTENT })
	}
}