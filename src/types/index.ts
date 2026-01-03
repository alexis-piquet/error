import { ErrorCode, ErrorLevel, ErrorType } from '#constants'

export type CoreErrorParams = {
  reason?: string
  stack?: string
  code?: ErrorCode
  store?: string
  type?: ErrorType
}

export type CoreErrorResponse = {
  level: ErrorLevel
  message: Error | string
  reason: string
  code?: ErrorCode
  status_message: 'nok'
  store?: string
  type?: ErrorType
}
