import { CLIENT_ERROR_CODE_UNAVAILABLE_FOR_LEGAL_REASONS, CLIENT_ERROR_TYPE_UNAVAILABLE_FOR_LEGAL_REASONS } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class UnavailableForLegalReasons extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_UNAVAILABLE_FOR_LEGAL_REASONS, code: CLIENT_ERROR_CODE_UNAVAILABLE_FOR_LEGAL_REASONS })
	}
}