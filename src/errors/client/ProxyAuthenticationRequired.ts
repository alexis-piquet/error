import { CLIENT_ERROR_CODE_PROXY_AUTHENTICATION_REQUIRED, CLIENT_ERROR_TYPE_PROXY_AUTHENTICATION_REQUIRED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class ProxyAuthenticationRequired extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_PROXY_AUTHENTICATION_REQUIRED, code: CLIENT_ERROR_CODE_PROXY_AUTHENTICATION_REQUIRED })
	}
}