import { CLIENT_ERROR_CODE_MISDIRECTED_REQUEST, CLIENT_ERROR_TYPE_MISDIRECTED_REQUEST } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class MisdirectedRequest extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_MISDIRECTED_REQUEST, code: CLIENT_ERROR_CODE_MISDIRECTED_REQUEST })
	}
}