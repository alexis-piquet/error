import { CLIENT_ERROR_CODE_EXPECTATION_FAILED, CLIENT_ERROR_TYPE_EXPECTATION_FAILED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class ExpectationFailed extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_EXPECTATION_FAILED, code: CLIENT_ERROR_CODE_EXPECTATION_FAILED })
	}
}