export * from '#errors/client'
export * from '#errors/server'

import { CLIENT_CODES, SERVER_CODES } from '#constants'
import type { Request, Response, NextFunction } from 'express-serve-static-core'

export function handleErrors(error: any, _req: Request, res: Response, _next: NextFunction): void {
  const codes = [ ...CLIENT_CODES, ...SERVER_CODES ]
  const is_known_status_code = codes.some(code => code === Number(error?.code))
  const status_code = is_known_status_code ? Number(error?.code) : 500
  res
    .status(status_code)
    .json({
      error: error?.type,
      message: error?.message,
      detail: error?.detail,
      routine: error?.routine,
    })
}