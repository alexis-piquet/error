import { CLIENT_ERROR_CODE_PAYMENT_REQUIRED, CLIENT_ERROR_TYPE_PAYMENT_REQUIRED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class PaymentRequired extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_PAYMENT_REQUIRED, code: CLIENT_ERROR_CODE_PAYMENT_REQUIRED })
	}
}