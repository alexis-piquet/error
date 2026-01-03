import { CLIENT_ERROR_CODE_UPGRADE_REQUIRED, CLIENT_ERROR_TYPE_UPGRADE_REQUIRED } from '#constants'
import { CoreError } from '#core'
import { CoreErrorParams } from '#types'

export class UpgradeRequired extends CoreError {
	constructor(message: Error | string, params?: CoreErrorParams) {
		super(message, { ...params, type: CLIENT_ERROR_TYPE_UPGRADE_REQUIRED, code: CLIENT_ERROR_CODE_UPGRADE_REQUIRED })
	}
}