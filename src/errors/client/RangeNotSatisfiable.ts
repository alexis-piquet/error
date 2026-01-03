import { CLIENT_ERROR_CODE_RANGE_NOT_SATISFIABLE, CLIENT_ERROR_TYPE_RANGE_NOT_SATISFIABLE } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class RangeNotSatisfiable extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_RANGE_NOT_SATISFIABLE, code: CLIENT_ERROR_CODE_RANGE_NOT_SATISFIABLE })
	}
}