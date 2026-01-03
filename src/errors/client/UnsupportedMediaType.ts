import { CLIENT_ERROR_CODE_UNSUPPORTED_MEDIA_TYPE, CLIENT_ERROR_TYPE_UNSUPPORTED_MEDIA_TYPE } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class UnsupportedMediaType extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_UNSUPPORTED_MEDIA_TYPE, code: CLIENT_ERROR_CODE_UNSUPPORTED_MEDIA_TYPE })
	}
}