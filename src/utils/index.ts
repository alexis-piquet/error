import { CORE_ERROR_SYMBOL } from '#constants'
import { CoreError } from '#core'

export function isCoreError(error: unknown): error is CoreError {
  return Boolean(
    error &&
    typeof error === 'object' &&
    (error as any)[CORE_ERROR_SYMBOL] === true
  )
}