import { CORE_ERROR_SYMBOL, ERROR_LEVELS, ErrorCode, ErrorLevel, ErrorType } from '#constants'
import { CoreErrorParams, CoreErrorResponse } from '#types'

export class CoreError extends Error {
  public readonly [CORE_ERROR_SYMBOL] = true
	public code?:  ErrorCode
	public level: ErrorLevel
	public reason: string
	public store?: string
	public type?: ErrorType

	constructor(
		message: Error | string,
		{ reason = '', code, store, stack, type }: CoreErrorParams,
	) {
		if (message instanceof Error) {
			const error = message
			message = error.message
			stack = error.stack ?? stack
		}
		if (typeof message !== 'string' || message.trim() === '') {
			throw new Error('error message is required and should be a string')
		}
		super(message)
		this.code = code
		this.level = this.setLevel(code)
		this.message = message
		this.reason = reason
		this.stack = stack || new Error(message).stack
		this.store = store
		this.type = type
	}

	public toJSON(): CoreErrorResponse {
		return {
			code: this.code,
			level: this.level,
			message: this.message,
			reason: this.reason,
			status_message: 'nok',
			store: this.store,
			type: this.type
		}
	}

	private setLevel(code?: ErrorCode): ErrorLevel {
		if (!code) return ERROR_LEVELS.ERROR

		const prefix = code.toString()[0]

		if (prefix === '1' || prefix === '2' || prefix === '3') return ERROR_LEVELS.INFO
		if (prefix === '4') return ERROR_LEVELS.WARN
		return ERROR_LEVELS.ERROR
	}
}