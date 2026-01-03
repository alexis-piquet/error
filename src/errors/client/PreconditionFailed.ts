import { CLIENT_ERROR_CODE_PRECONDITION_FAILED, CLIENT_ERROR_TYPE_PRECONDITION_FAILED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class PreconditionFailed extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_PRECONDITION_FAILED, code: CLIENT_ERROR_CODE_PRECONDITION_FAILED })
	}
}