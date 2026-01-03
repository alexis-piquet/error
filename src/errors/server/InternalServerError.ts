import { SERVER_ERROR_CODE_INTERNAL_SERVER_ERROR, SERVER_ERROR_TYPE_INTERNAL_SERVER_ERROR } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class InternalServerError extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: SERVER_ERROR_TYPE_INTERNAL_SERVER_ERROR, code: SERVER_ERROR_CODE_INTERNAL_SERVER_ERROR })
	}
}