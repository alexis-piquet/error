import type { ClientErrorCode, ClientErrorType } from '#constants/client'
import type { ServerErrorCode, ServerErrorType } from '#constants/server'
export * from '#constants/client'
export * from '#constants/server'

export const CORE_ERROR_SYMBOL = Symbol.for('core-error')

export const ERROR_LEVELS = {
  DEBUG: 'debug',
  ERROR: 'error',
  INFO: 'info',
  WARN: 'warn',
} as const

export type ErrorLevel = typeof ERROR_LEVELS[keyof typeof ERROR_LEVELS]
export type ErrorCode = ClientErrorCode | ServerErrorCode
export type ErrorType = ClientErrorType | ServerErrorType