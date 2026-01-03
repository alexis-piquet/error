import { CLIENT_ERROR_CODE_I_M_A_TEAPOT, CLIENT_ERROR_TYPE_I_M_A_TEAPOT } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class IMATeapot extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_I_M_A_TEAPOT, code: CLIENT_ERROR_CODE_I_M_A_TEAPOT })
	}
}