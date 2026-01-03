import { CLIENT_ERROR_CODE_FAILED_DEPENDENCY, CLIENT_ERROR_TYPE_FAILED_DEPENDENCY } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class FailedDependency extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_FAILED_DEPENDENCY, code: CLIENT_ERROR_CODE_FAILED_DEPENDENCY })
	}
}