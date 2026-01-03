import { CLIENT_ERROR_CODE_PRECONDITION_REQUIRED, CLIENT_ERROR_TYPE_PRECONDITION_REQUIRED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class PreconditionRequired extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_PRECONDITION_REQUIRED, code: CLIENT_ERROR_CODE_PRECONDITION_REQUIRED })
	}
}