import { CLIENT_ERROR_CODE_CONTENT_TOO_LARGE, CLIENT_ERROR_TYPE_CONTENT_TOO_LARGE } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class ContentTooLarge extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_CONTENT_TOO_LARGE, code: CLIENT_ERROR_CODE_CONTENT_TOO_LARGE })
	}
}